import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  tags,
}) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900/60 dark:backdrop-blur-sm border border-gray-200 dark:border-gray-700/60 rounded-lg shadow-md dark:shadow-[0_2px_20px_rgba(0,0,0,0.4)] hover:shadow-xl dark:hover:border-gray-500 transition-shadow duration-300 hover:cursor-pointer">
      <div className="w-12 h-12 flex items-center justify-center bg-black dark:bg-gray-950 dark:border dark:border-gray-700 rounded-md mb-4 text-white dark:text-gray-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
        {subtitle}
      </p>
      <p className="text-gray-700 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 border border-transparent dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
