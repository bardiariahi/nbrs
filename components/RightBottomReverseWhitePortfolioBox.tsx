type RWPBTypes = {
  children: any;
};

const RightBottomReverseWhitePortfolioBox: React.FC<RWPBTypes> = ({ children }) => {
  return (
    <div className="w-1/2 p-6 bg-white dark:bg-gray-500 rounded-bl-3xl text-justify rounded-t-3xl ps-10">
      {children}
    </div>
  );
};

export default RightBottomReverseWhitePortfolioBox;
