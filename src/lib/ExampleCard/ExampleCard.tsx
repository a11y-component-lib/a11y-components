type ExampleCardType = { img: { src: string, alt: string}, title: string, children: React.ReactNode }

export function ExampleCard({ img, title, children}: ExampleCardType) {
  return (
    <article>
      <img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}