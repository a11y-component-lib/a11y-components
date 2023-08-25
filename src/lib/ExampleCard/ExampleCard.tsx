type CardProps = { 
  img: { src: string, alt: string}, 
  title: string, 
  children: React.ReactNode 
}

export function ExampleCard({ img, title, children }: React.PropsWithChildren<CardProps>) {
  return (
    <article data-card>
    <img data-card-img src={img.src} alt={img.alt} />
    <h2>{title}</h2>
    {children}
    </article>
  );
}