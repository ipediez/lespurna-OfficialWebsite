"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !videoLoaded) {
          setVideoLoaded(true);
          const res = await fetch("/fogueres_cut.mp4");
          const data = await res.blob();
          videoElement.src = URL.createObjectURL(data);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observer.observe(videoElement);

    return () => observer.disconnect();
  }, [videoLoaded]);
  return (
    <div className="body">

      {/* ✅ Lazy load third-party scripts */}
      <Script 
        src="https://widgetv3.bandsintown.com/main.min.js" 
        strategy="lazyOnload" 
      />

     {/* JSON-LD Structured Data */}
     <Script id="json-ld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          "name": "LESPURNA",
          "url": "https://lespurna.com",
          "image": "https://lespurna.com/og-image.jpg",
          "sameAs": [
            "https://www.instagram.com/lespurna_grup/",
            "https://www.tiktok.com/@lespurna_grup",
            "https://www.youtube.com/@lespurnagrup",
            "https://open.spotify.com/artist/1ijOEW6rHfpMkXmhe6JL1o"
          ],
          "genre": ["Rock", "Alternative Rock", "Hard Rock", "Pop Punk", "Alternative Metal"],
          "member": [
            {
              "@type": "Person",
              "name": "Miriam",
              "role": "Singer"
            },
            {
              "@type": "Person",
              "name": "Eric",
              "role": "Keyboardist"
            },
            {
              "@type": "Person",
              "name": "Alex",
              "role": "Guitarist"
            },
            {
              "@type": "Person",
              "name": "Irene",
              "role": "Guitarist"
            },
            {
              "@type": "Person",
              "name": "Bassist Name",
              "role": "Sergio"
            },
            {
              "@type": "Person",
              "name": "Aitor",
              "role": "Drummer"
            }
          ],
          "album": [
            {
              "@type": "MusicAlbum",
              "name": "Mal en Calma",
              "url": "https://open.spotify.com/album/1MKdgKCwoh3VlHaWGmzTqA?si=BikHa5YsSlu8Gqhk4-VrYw"
            }
          ]
        })}
      </Script>

      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full">
        <Image
          src="/portada_color.PNG"
          alt="LESPURNA Cover"
          width={3840}
          height={1152}
          className="w-full h-auto object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-8xl font-bold tracking-wide">LESPURNA</h1>
        </div>
      </section>

      {/* Spacer - Adds small padding between sections */}
      <div className="py-4"></div>

      {/* Video Section - Now Full Width */}
      <section id="video" className="relative w-full h-[400px]">
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover"></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
          <h2 className="text-4xl font-bold">FOGUERES</h2>
          <a
            href="https://www.youtube.com/watch?v=GKVtTWqNj4E"
            target="_blank"
            className="mt-4 px-6 py-2 bg-[#962222] hover:bg-[#400b0c] rounded-lg text-lg"
          >
            Mira&apos;l ara
          </a>
        </div>
      </section>

      {/* Gallery Section - Now with Square Images */}
      <section id="gallery" className="flex justify-center py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { src: "/finsAlCel.png", link: "https://www.youtube.com/watch?v=HuwiJClFuw8", text: "Fins al Cel - En viu" },
          { src: "/laMeuaPau.png", link: "https://www.youtube.com/watch?v=_CPQFVDPoFc", text: "La Meua Pau - Official Music Video" },
          { src: "/continents.png", link: "https://www.youtube.com/watch?v=1sBJP3zgOs4", text: "Contients - Official Music Video" },
        ].map((item, index) => (
          <a key={index} href={item.link} target="_blank" className="group relative block w-[290px] h-[290px]">
          <Image
            src={item.src}
            alt={item.text}
            width={290}
            height={290}
            loading='lazy'
            className="w-full h-full object-cover rounded-lg"
          />
          <p className="absolute bottom-0 w-full text-center p-2">
            {item.text}
          </p>
        </a>
        ))}
        </div>
      </section>


      {/* Contact Section */}
      <section 
  className="text-center py-16 relative bg-fixed bg-center bg-cover" 
  style={{ backgroundImage: "url('/bateria_aitor.PNG')" }} // Replace with your image
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black bg-opacity-75"></div>
  <div className="relative z-10">
  <h2 className="text-4xl font-bold mb-4">LESPURNA som...</h2>
        <p className="max-w-2xl mx-auto text-lg">
        un grup de música emergent de València. La nostra música és una fusió de hard rock, pop punk i rock alternatiu, amb influències com Smoking Souls, The Warning o Dead Poets Society, entre altres.
        </p>
        
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-4 text-[#962222]"> CONTRACTACIÓ </h2>
        <p className="max-w-2xl mx-auto text-lg text-[#962222]">
        <a href="mailto:contractacio@acontratemps.es" className="text-white">contractacio@acontratemps.es</a>
        </p>
      </section>

      <Footer />
    </div>
  );
}
