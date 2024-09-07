export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className={`flex flex-col items-center justify-center w-full h-dvh py-12 md:py-24 lg:py-32 xl:py-48 ${className}`}
    >
      {children}
    </div>
  );
}
