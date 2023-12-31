
type BTypes = {
    className?: string;
    children: any
}
const BodyContainer:React.FC<BTypes> = ({
    children,
    className
}) => {
  return (
    <div className={className ? className : "p-4 bg-white dark:bg-zinc-900 text-black dark:text-white"}>{children}</div>
  )
}

export default BodyContainer