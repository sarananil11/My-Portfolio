const variants = {
  primary:
    'bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/30 border border-white/10',
  secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
  ghost: 'bg-transparent text-white hover:bg-white/10 border border-white/10',
}

const sizes = {
  md: 'px-6 py-3 text-sm font-semibold',
  lg: 'px-7 py-3.5 text-base font-semibold',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as = 'button',
  ...props
}) => {
  const Component = as
  const variantClasses = variants[variant] ?? variants.primary
  const sizeClasses = sizes[size] ?? sizes.md

  return (
    <Component
      className={`inline-flex items-center gap-2 rounded-full transition-colors duration-200 ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button

