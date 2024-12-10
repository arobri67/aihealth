const SectionHeader = ({
  title,
  subtitle,
  h1 = false,

}: {
  title: string;
  subtitle?: string;
  h1?: boolean;
}) => {
  return (
    <div className="text-center">
      {h1 ? (
        <h1 className="mb-4 font-bricolage text-3xl font-bold md:text-4xl">
          {title}
        </h1>
      ) : (
        <h2 className="mb-4 font-bricolage text-3xl font-bold md:text-4xl">
          {title}
        </h2>
      )}
      <p className="mb-8 text-base text-muted-foreground md:text-lg">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
