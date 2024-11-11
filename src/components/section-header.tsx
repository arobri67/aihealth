const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="text-center">
      <h2 className="mb-4 font-bricolage text-5xl font-bold md:text-6xl">
        {title}
      </h2>
      <p className="mb-8 text-lg text-muted-foreground">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
