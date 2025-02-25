import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaSpotify, FaApple, FaAmazon } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      <Link href="https://www.instagram.com/lespurna_grup/" target="_blank"><FaInstagram size={24} /></Link>
      <Link href="https://www.tiktok.com/@lespurna_grup" target="_blank"><FaTiktok size={24} /></Link>
      <Link href="https://www.youtube.com/@lespurnagrup" target="_blank"><FaYoutube size={24} /></Link>
      <Link href="https://open.spotify.com/artist/1ijOEW6rHfpMkXmhe6JL1o" target="_blank"><FaSpotify size={24} /></Link>
      <Link href="https://music.apple.com/us/artist/lespurna/1583601147" target="_blank"><FaApple size={24} /></Link>
      <Link href="https://music.amazon.com/artists/B09DZ5BN31/lespurna" target="_blank"><FaAmazon size={24} /></Link>
    </div>
  );
};

export default SocialIcons;
