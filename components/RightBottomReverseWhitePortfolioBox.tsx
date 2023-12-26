type RWPBTypes = {
  children: any;
  dir?: "rtl" | "ltr"
};

const RightBottomReverseWhitePortfolioBox: React.FC<RWPBTypes> = ({ children , dir="rtl" }) => {
  return (
    <div dir={dir} className="w-1/2 p-6 bg-white dark:bg-gray-500 rounded-bl-3xl text-justify rounded-t-3xl ps-10">
      {children}
    </div>
  );
};

export default RightBottomReverseWhitePortfolioBox;
