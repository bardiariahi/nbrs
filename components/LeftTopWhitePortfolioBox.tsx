
type LWPBTypes = {
  children: any;
};

const LeftTopWhitePortfolioBox:React.FC<LWPBTypes> = ({children}) => {
  return (
    <div dir="ltr" className="w-1/2 p-6 bg-white dark:bg-gray-500 text-justify rounded-b-3xl rounded-tl-3xl ps-10">{children}</div>
  )
}

export default LeftTopWhitePortfolioBox