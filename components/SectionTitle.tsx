type SectionTitleProps = {
  title: string;
  center?: boolean;
  className?: string;
};

export default function SectionTitle({
  title,
  center = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${center ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      <div
        className={`w-16 h-1 bg-gray-900 rounded ${center ? "mx-auto" : ""}`}
      />
    </div>
  );
}
