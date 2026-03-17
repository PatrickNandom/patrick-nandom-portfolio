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
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="w-12 h-12 flex items-center justify-center bg-black rounded-md mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{subtitle}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
