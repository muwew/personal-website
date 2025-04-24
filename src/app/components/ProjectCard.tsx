type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
    image?: string;
    livePreview?: string;
  };
  
  export default function ProjectCard({
    title,
    description,
    link,
    image,
    livePreview,
  }: ProjectCardProps) {
    return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block border rounded-2xl shadow-gray-300 hover:shadow-xl/30 hover:bg-[var(--highlight)]
    transition duration-400 overflow-hidden bg-[var(--foreground)]">
        <div className="aspect-4/3 bg-gray-100">
          {livePreview ? (
            <iframe
              src={livePreview}
              className="w-full h-full"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          ) : (
            image && <img src={image} alt={`${title} preview`} className="w-full h-full object-cover" />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-[var(--background)] p-2">{title}</h3>
          <p className="text-sm text-gray-700 mt-2 p-2">{description}</p>
        </div>
      </a>
    );
  }
  