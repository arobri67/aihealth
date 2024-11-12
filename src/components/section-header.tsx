const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="text-center">
      <h2 className="mb-4 font-bricolage text-4xl font-bold md:text-5xl">
        {title}
      </h2>
      <p className="mb-8 text-base text-muted-foreground md:text-lg">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
