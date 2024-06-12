interface IProcessItem {
    title: string;
    description: string;
    icon: any;
    link: string;
  }
  
  export const ProcessItem = ({
    title,
    description,
    icon,
    link,
  }: IProcessItem) => {
    return (
      <div className="flex items-start p-2 mt-4 ml-4">
        <img src={icon} alt="React Logo" className="w-8 h-8 mr-2 mt-2" />
        <div className="mt-2">
          <p className="text-lg font-semibold text-black">{title}</p>
          {description && (
            <p className="text-base text-gray-400 md:text-sm max-w-sm">{description}</p>
          )}
          {link && <p className="text-base text-purple-400">{link}</p>}
        </div>
      </div>
    );
  };