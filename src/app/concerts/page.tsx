"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// API Key & Artist ID
const API_KEY = "API_KEY"; // Replace with your actual API key
const ARTIST_NAME = "LESPURNA";

export default function Concerts() {
  const [events, setEvents] = useState([]);
  const [showUpcoming, setShowUpcoming] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/${ARTIST_NAME}/events?app_id=${API_KEY}&date=all`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          const upcoming = data.filter((event) => new Date(event.datetime) > new Date());
          const past = data.filter((event) => new Date(event.datetime) <= new Date());

          setEvents(showUpcoming ? upcoming : past);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [showUpcoming]);

  return (
    <div className="body text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full max-h-[400px]">
        <Image
          src="/shows_photo.PNG"
          alt="Concerts Hero Image"
          width={1920}
          height={400}
          className="w-full h-[400px] object-cover"
          priority
        />
      </section>

      {/* Title Section */}
      <section className="text-center py-8">
      <h2 className="text-4xl font-bold uppercase tracking-wide primary">
          LESPURNA
        </h2>
        <h2 className="text-4xl font-bold uppercase tracking-wide">
          EN DIRECTE
        </h2>
      </section>

      {/* Toggle Section */}
      <div className="flex justify-center space-x-6 text-lg font-semibold pb-6">
        <button
          className={`cursor-pointer ${showUpcoming ? "text-[#962222]" : "text-gray-400"}`}
          onClick={() => setShowUpcoming(true)}
        >
          Pròxims
        </button>
        <button
          className={`cursor-pointer ${!showUpcoming ? "text-[#962222]" : "text-gray-400"}`}
          onClick={() => setShowUpcoming(false)}
        >
          Passats
        </button>
      </div>

      {/* Tour Dates Section */}
      <section className="max-w-4xl mx-auto p-6">
        {loading ? (
          <p className="text-center text-gray-400">Carregant concerts...</p>
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {events.map((event, index) => {
              const eventUrl = event.url; // Bandsintown event page
              return (
                <div
                  key={index}
                  className="border border-gray-700 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center text-center md:text-left"
                >
                  <div>
                    <p className="text-lg font-semibold">
                      {new Date(event.datetime).toLocaleDateString()}
                    </p>
                    <p className="text-2xl font-bold">{event.venue.name}</p>
                    <p className="text-gray-400">
                      {event.venue.city}, {event.venue.country}
                    </p>
                  </div>
                  <a
                    href={eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 md:mt-0 px-6 py-2 rounded-lg text-white text-lg font-semibold transition ${
                      showUpcoming ? "bg-[#962222] hover:bg-red-700" : "bg-gray-500 hover:bg-gray-600"
                    }`}
                  >
                    {showUpcoming ? "Saber mes" : "Jo hi vaig estar!"}
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-400">No s'han trobat concerts</p>
        )}
      </section>

      {/* Request a Concert Section */}
      <section className="text-center py-12">
        <p className="text-lg">
          No tenim concerts a prop de tu?{" "}
          <a
            href="https://www.bandsintown.com/es/artist-subscribe/15576957-lespurna?affil_code=js_&app_id=js_&bg-color=rgba%280%2C0%2C0%2C1%29&border-color=rgba%2874%2C74%2C74%2C1%29&came_from=700&cta-bg-color=rgba%28150%2C34%2C34%2C1%29&cta-border-color=rgba%2874%2C74%2C74%2C1%29&cta-border-radius=2px&cta-border-width=0px&cta-text-color=rgba%28255%2C255%2C255%2C1%29&font=Helvetica&play-my-city=true&signature=ZZ0948093a8204aa3341cd2b286169aa09dbfbf48712b3dd47ffedc3964a2255e1&spn=0&text-color=rgba%28255%2C255%2C255%2C1%29&utm_campaign=play_my_city&utm_medium=web&utm_source=widget"
            target="_blank"
            className="primary font-bold hover:underline"
          >
            Dis-nos la teua ciutat!
          </a>
        </p>
      </section>

      <Footer />
    </div>
  );
}
