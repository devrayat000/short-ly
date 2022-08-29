export interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div className="flex flex-col items-center md:items-start gap-4 text-neutral-gray">
        {children}
      </div>
    </div>
  );
};

export default FooterSection;
