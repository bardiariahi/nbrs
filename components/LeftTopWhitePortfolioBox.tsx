
type LWPBTypes = {
  children: any;
  dir?: "rtl" | "ltr"
};

const LeftTopWhitePortfolioBox:React.FC<LWPBTypes> = ({children , dir="rtl"}) => {
  return (
    <div dir={dir} className="w-1/2 p-6 bg-white dark:bg-gray-500 text-justify rounded-b-3xl rounded-tl-3xl ps-10 shadow-lg">{children}</div>
  )
}

export default LeftTopWhitePortfolioBox