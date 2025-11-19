import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion as Motion } from 'framer-motion'
import Button from '../components/Button'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import useSectionObserver from '../hooks/useSectionObserver'

const initialState = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {
  const sectionRef = useSectionObserver('contact')
  const [formValues, setFormValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const credentials = useMemo(
    () => ({
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }),
    [],
  )

  const validate = () => {
    const nextErrors = {}
    if (!formValues.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }
    if (!formValues.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!formValues.message.trim()) {
      nextErrors.message = 'Share a quick summary of your project or message.'
    }
    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!credentials.serviceId || !credentials.templateId || !credentials.publicKey) {
      setStatus('error')
      setErrors({ form: 'Add your EmailJS keys to .env to enable this form.' })
      return
    }

    setStatus('loading')
    try {
      await emailjs.send(
        credentials.serviceId,
        credentials.templateId,
        {
          from_name: formValues.name,
          reply_to: formValues.email,
          message: formValues.message,
        },
        { publicKey: credentials.publicKey },
      )
      setStatus('success')
      setFormValues(initialState)
      setErrors({})
    } catch (error) {
      setStatus('error')
      setErrors({ form: 'Something went wrong. Please try again in a moment.' })
      console.error(error)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="mx-auto max-w-5xl px-6 pb-24 pt-10 sm:pb-32 sm:pt-8"
    >
      <Card className="space-y-10">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let’s build something together"
          description="Drop a quick message or just say hi. I reply within a day."
        />

        <Motion.form
          onSubmit={handleSubmit}
          className="mx-auto grid w-full max-w-3xl gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-200">
              Name
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand focus:outline-none"
              />
              {errors.name && <p className="text-xs text-rose-400">{errors.name}</p>}
            </label>

            <label className="space-y-2 text-sm text-slate-200">
              Email
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand focus:outline-none"
              />
              {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-200">
            Message
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your idea, timeline, or goals."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand focus:outline-none"
            />
            {errors.message && <p className="text-xs text-rose-400">{errors.message}</p>}
          </label>

          {errors.form && (
            <p className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {errors.form}
            </p>
          )}

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">
              Powered by EmailJS. Add your keys in <code>.env</code>.
            </p>
            <Button
              type="submit"
              size="lg"
              disabled={status === 'loading'}
              className={status === 'loading' ? 'opacity-70' : ''}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
          </div>

          {status === 'success' && (
            <p className="text-sm text-emerald-300">Thanks! I’ll get back to you shortly.</p>
          )}
        </Motion.form>
      </Card>
    </section>
  )
}

export default Contact

