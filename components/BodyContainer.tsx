
type BTypes = {
    className?: string;
    children: any
}
const BodyContainer:React.FC<BTypes> = ({
    children,
    className
}) => {
  return (
    <div className={className ? className : "p-4 bg-gray-200 dark:bg-black"}>{children}</div>
  )
}

export default BodyContainer