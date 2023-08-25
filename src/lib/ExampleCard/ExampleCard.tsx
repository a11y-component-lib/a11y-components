type CardProps = { 
  img: { 
    src: string, 
    alt: string, 
    width?: string,
    height?: string,
  }, 
  title: string, 
  children?: React.ReactNode 
}

export function ExampleCard({ img, title, children }: React.PropsWithChildren<CardProps>) {
  return (
    <article 
      data-card 
      style={{textAlign: "center", borderRadius: "25px"}}
    >
      <h2>{title}</h2>
      <img 
        style={{borderRadius: "25px"}} width={img.width} 
        height={img.height} 
        src={img.src} 
        alt={img.alt} 
        data-card-img 
      />
      {children}
    </article>
  );
}