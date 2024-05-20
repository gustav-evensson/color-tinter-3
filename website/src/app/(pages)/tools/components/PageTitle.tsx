type Props = {
  title: string;
  description: string;
};

export default function PageTitle({ title, description }: Props) {
  return (
    <div className="hidden xs:block">
      <h3 className="text-lg">{title}</h3>
      <p className="text-muted-foreground hidden md:block">{description}</p>
    </div>
  );
}
