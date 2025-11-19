const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`space-y-3 ${alignment} max-w-2xl`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.4em] text-brand-light/80">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && <p className="text-base text-slate-300">{description}</p>}
    </div>
  )
}

export default SectionHeading

