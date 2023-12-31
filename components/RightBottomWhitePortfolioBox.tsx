type RWPBTypes = {
  children: any;
  dir?: "rtl" | "ltr"
};

const RightBottomWhitePortfolioBox: React.FC<RWPBTypes> = ({ children , dir="rtl" }) => {
  return (
    <div dir={dir} className="w-1/2 p-6 bg-white dark:bg-gray-500 rounded-t-3xl text-justify rounded-br-3xl ps-10 shadow-lg">
      {children}
    </div>
  );
};

export default RightBottomWhitePortfolioBox;
