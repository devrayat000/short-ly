import { clsx } from "clsx";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  image: string;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  className,
  children,
  ...rest
}) => {
  return (
    <article
      className={clsx("prose-h4:mb-0 prose-p:mb-0 relative mt-16", className)}
      {...rest}
    >
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-primary-bg w-20 h-20 my-0 rounded-full grid place-items-center">
        <img src={image} alt={title} className="m-0" />
      </div>
      <section className="bg-white rounded-md p-8 relative">
        <h3 className="text-center md:text-left">{title}</h3>
        <p className="text-center md:text-left">{children}</p>
      </section>
    </article>
  );
};

export default Card;
