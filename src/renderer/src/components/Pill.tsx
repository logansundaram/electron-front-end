interface PillProps {
  content: string
  color?: string
}

function Pill({ content, color }: PillProps) {
  return (
    <div className={`btn-secondary whitespace-nowrap${color ? ` ${color}` : ''}`}>{content}</div>
  )
}

export default Pill
