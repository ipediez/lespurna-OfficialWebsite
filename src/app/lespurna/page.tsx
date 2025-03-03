"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Member {
  image: string;
  name: string;
  bio: string;
}

export default function LespurnaPage() {
    const [members, setMembers] = useState<Member[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const membersPerPage = 3;
  
    useEffect(() => {
      fetch("/data/members.json")
        .then((res) => res.json())
        .then((data) => setMembers(data));
    }, []);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + membersPerPage >= members.length ? 0 : prevIndex + membersPerPage
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Math.max(0, members.length - membersPerPage) : prevIndex - membersPerPage
      );
    };
  
    return (
      <div className="bg-[#070014] text-white min-h-screen">
        <Navbar />
  
        {/* ✅ Hero Section */}
        <section className="relative w-full max-h-[400px]">
          <Image
            src="/lespurna-hero-dos.jpg"
            alt="LESPURNA Band Hero"
            width={1920}
            height={400}
            className="w-full h-[400px] object-cover"
            priority
          />
        </section>
  
        {/* ✅ About Section */}
        <section className="flex flex-col md:flex-row items-center py-12 px-6 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <Image
              src="/lespurna-band.jpg"
              alt="LESPURNA Band Image"
              width={600}
              height={400}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#962222] mb-4"> LESPURNA</h2>
            <p className="text-lg">
              LESPURNA és una formació musical que va iniciar la seva trajectòria a València l&apos;any 2021.<br /><br />
              
              La banda explora la fusió de diferents gèneres, com el hard rock, pop punk i rock alternatiu, a partir dels diversos orígens i estils musicals dels seus membres.
              Aquesta combinació es veu influenciada per grups com Desakato, Smoking Souls, The Warning o Dead Poets Society, entre altres.<br /><br />
              
              El seu primer treball d&apos;estudi, &ldquo;Mal en Calma&rdquo;, va ser publicat al 2023, fruit de l&apos;enregistrament realitzat a WZ estudi.
              Aquest treball va rebre una nominació a Millor Disc de Rock als Premis Ovidi 2023.<br /><br />
              
              Actualment, LESPURNA es troba en la fase de composició de nous temes, amb la intenció de publicar nou material en un futur proper.
            </p>
          </div>
        </section>
  
        {/* ✅ Band Members Carousel (Shows 3 Members at a Time) */}
        <section className="text-center py-12 bg-[#111]">
          <h2 className="text-4xl font-bold text-[#962222] mb-6">INTEGRANTS</h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="relative flex items-center">
              {/* Left Arrow */}
              <button onClick={prevSlide} className="absolute left-0 p-3 bg-gray-700 rounded-full">
                ◀
              </button>
  
              {/* Members Grid (Show 3 at a time) */}
              <div className="flex justify-center gap-6 overflow-hidden w-full">
                {members.slice(currentIndex, currentIndex + membersPerPage).map((member, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={250}
                      height={250}
                      className="w-[250px] h-[250px] object-cover aspect-square border-0"
                    />
                    <h3 className="text-2xl font-semibold mt-4 text-[#962222]">{member.name}</h3>
                    <p className="text-gray-300 mt-2 max-w-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
  
              {/* Right Arrow */}
              <button onClick={nextSlide} className="absolute right-0 p-3 bg-gray-700 rounded-full">
                ▶
              </button>
            </div>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  }