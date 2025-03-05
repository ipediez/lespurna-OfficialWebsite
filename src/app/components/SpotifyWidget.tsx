interface SpotifyWidgetProps {
  backgroundImage?: string;  // Made optional with '?'
}

const SpotifyWidget = ({ backgroundImage }: SpotifyWidgetProps) => {
  return (
    <section 
      className="text-center py-16 relative bg-fixed bg-center bg-cover" 
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}} 
    >
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  <div className="relative z-10">
    <h2 className="text-4xl font-bold uppercase tracking-wide primary">ESCOLTANS ARA!</h2>
    <div className="flex justify-center mt-6">
      <iframe
        className="w-1/2 mx-auto rounded-lg"
        src="https://open.spotify.com/embed/artist/1ijOEW6rHfpMkXmhe6JL1o?utm_source=generator&theme=0"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>
  );
};

export default SpotifyWidget;
