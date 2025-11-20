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

  const socialLinks = useMemo(
    () => ({
      github: import.meta.env.VITE_GITHUB_URL ?? 'https://github.com/sarananil11',
      linkedin:
        import.meta.env.VITE_LINKEDIN_URL ?? 'https://www.linkedin.com/in/saran-anil-v-p-028521341/',
    }),
    [],
  )

  const hasAlphabet = (value) => /[A-Za-z]/.test(value)

  const validate = () => {
    const nextErrors = {}
    if (!formValues.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    } else if (!hasAlphabet(formValues.name)) {
      nextErrors.name = 'Name must include alphabet characters.'
    }
    if (!formValues.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!formValues.message.trim()) {
      nextErrors.message = 'Share a quick summary of your project or message.'
    } else if (!hasAlphabet(formValues.message)) {
      nextErrors.message = 'Message needs at least one letter.'
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

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-400">Connect with me.</p>
              <div className="mt-2 flex gap-3">
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                    aria-label="GitHub profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.42c.6.11.82-.26.82-.58v-2.07c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.24.96-.27 1.98-.4 3-.4 1.02 0 2.04.14 3 .4 2.29-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.63-2.81 5.66-5.49 5.96.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                    </svg>
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10"
                    aria-label="LinkedIn profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.5h4.95V24H.5zm7.5 0h4.74v2.11h.07c.66-1.25 2.28-2.56 4.69-2.56 5.02 0 5.95 3.3 5.95 7.59V24h-4.94v-7.06c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.84-2.71 3.74V24H8z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
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

