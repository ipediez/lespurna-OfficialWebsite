"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ITEMS_PER_PAGE = 3;

const fetchMusicData = async (type: "albums" | "singles") => {
  const response = await fetch(`/data/${type}.json`);
  return response.json();
};

const Pagination = ({ total, current, onPageChange }: { total: number; current: number; onPageChange: (page: number) => void }) => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          className={`w-3 h-3 rounded-full ${i === current ? "bg-[#962222]" : "bg-gray-400"}`}
          onClick={() => onPageChange(i)}
        ></button>
      ))}
    </div>
  );
};

export default function Musica() {
  const [albums, setAlbums] = useState([]);
  const [singles, setSingles] = useState([]);
  const [albumPage, setAlbumPage] = useState(0);
  const [singlePage, setSinglePage] = useState(0);

  useEffect(() => {
    fetchMusicData("albums").then(setAlbums);
    fetchMusicData("singles").then(setSingles);
  }, []);

  const displayedAlbums = albums.slice(albumPage * ITEMS_PER_PAGE, (albumPage + 1) * ITEMS_PER_PAGE);
  const displayedSingles = singles.slice(singlePage * ITEMS_PER_PAGE, (singlePage + 1) * ITEMS_PER_PAGE);

  return (
    <div className="body text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full max-h-[400px]">
        <Image
          src="/guitar_crop2.png"
          alt="Music Hero Image"
          width={1920}
          height={400}
          className="w-full h-[400px] object-cover"
          priority
        />
      </section>

      {/* Albums Section */}
      <section className="text-center py-8">
        <h2 className="text-4xl font-bold uppercase tracking-wide primary">ÀLBUMS</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {displayedAlbums.map((album, index) => (
            <div key={index} className="text-center">
              <Image src={album.image} alt={album.title} width={400} height={400} loading='lazy' className="w-[250px] h-[250px] object-cover rounded-lg" />
              <p className="mt-2 text-lg font-semibold">{album.title}</p>
              <a href={album.link} target="_blank" className="underline text-[#962222] underline-offset-4">Escoltar ara</a>
            </div>
          ))}
        </div>
        <Pagination total={Math.ceil(albums.length / ITEMS_PER_PAGE)} current={albumPage} onPageChange={setAlbumPage} />
      </section>

      {/* Singles Section */}
      <section className="text-center py-8">
        <h2 className="text-4xl font-bold uppercase tracking-wide primary">SINGLES</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {displayedSingles.map((single, index) => (
            <div key={index} className="text-center">
              <Image src={single.image} alt={single.title} width={400} height={400} loading='lazy' className="w-[250px] h-[250px] object-cover rounded-lg" />
              <p className="mt-2 text-lg font-semibold">{single.title}</p>
              <a href={single.link} target="_blank" className="underline text-[#962222] underline-offset-4">Escoltar ara</a>
            </div>
          ))}
        </div>
        <Pagination total={Math.ceil(singles.length / ITEMS_PER_PAGE)} current={singlePage} onPageChange={setSinglePage} />
      </section>

{/* Spotify Widget Section */}
<section 
  className="text-center py-16 relative bg-fixed bg-center bg-cover" 
  style={{ backgroundImage: "url('/LLUISMARTI-39.jpg')" }} // Replace with your image
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

      <Footer />
    </div>
  );
}