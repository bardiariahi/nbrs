type BTypes = {
  bgColor?: string;
  txtColor?: string;
  borderColor?: string;
  cornsersColor?: string;
  children: any;
};
const BorderCornersBold: React.FC<BTypes> = ({
  bgColor,
  txtColor,
  borderColor,
  cornsersColor,
  children,
}) => {
  return (
    <div
      className={`h-screen flex z-0 ${bgColor ? bgColor : "bg-blue-900"} ${
        txtColor ? txtColor : "text-black dark:text-white"
      } p-4`}>
      <div
        className={`border-2 relative ${
          borderColor ? borderColor : "border-[#2e4452]"
        } w-1/6 h-72 border-opacity-80`}>
        <div
          className={`absolute border-t-4 ${
            cornsersColor
              ? `border-t-${cornsersColor} border-l-${cornsersColor}`
              : " border-t-white border-l-white dark:border-t-[#c8d4df] dark:border-l-[#c8d4df]"
          } border-l-4 w-5 h-5 -top-[3px] -left-[3px]`}></div>
        <div
          className={`absolute border-t-4 ${
            cornsersColor
              ? ` border-t-${cornsersColor} border-r-${cornsersColor}`
              : "border-t-white border-r-white dark:border-t-[#c8d4df] dark:border-r-[#c8d4df]"
          } border-r-4 w-5 h-5 -top-[3px] -right-[3px]`}></div>
        <div
          className={`absolute border-b-4 ${
            cornsersColor
              ? ` border-b-${cornsersColor} border-l-${cornsersColor}`
              : "border-b-white border-l-white dark:border-b-[#c8d4df] dark:border-l-[#c8d4df]"
          } border-l-4 w-5 h-5 -bottom-[3px] -left-[3px]`}></div>
        <div
          className={`absolute border-b-4 ${
            cornsersColor
              ? `border-b-${cornsersColor} border-r-${cornsersColor}`
              : "border-b-white border-r-white dark:border-b-[#c8d4df] dark:border-r-[#c8d4df]"
          } border-r-4 w-5 h-5 -bottom-[3px] -right-[3px]`}></div>
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
};

export default BorderCornersBold;
