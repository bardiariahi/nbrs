type CTTypes = {
  persianTitle: string;
  englishTitle: string;
};
const CustomTitles: React.FC<CTTypes> = ({ persianTitle, englishTitle }) => {
  return (
    <div className="text-center pt-10">
      <div>
        <b className="text-xl text-black dark:text-white font-bold border-b border-gray-500 dark:border-gray-200">
          {persianTitle}
        </b>
      </div>
      <div>
        <span className="text-black dark:text-white text-sm">
        &quot;{englishTitle}&quot;
        </span>
      </div>
    </div>
  );
};

export default CustomTitles;
