const Card = ({ children, className = '', as: Component = 'div', ...props }) => {
  return (
    <Component
      className={`rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-soft backdrop-blur-2xl ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card

