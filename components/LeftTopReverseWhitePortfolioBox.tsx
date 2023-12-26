
type LWPBTypes = {
  children: any;
  dir?: "rtl" | "ltr"
};

const LeftTopReverseWhitePortfolioBox:React.FC<LWPBTypes> = ({children , dir="rtl" }) => {
  return (
    <div dir={dir} className="w-1/2 p-6 bg-white dark:bg-gray-500 text-justify rounded-b-3xl rounded-tr-3xl ps-10">{children}</div>
  )
}

export default LeftTopReverseWhitePortfolioBox