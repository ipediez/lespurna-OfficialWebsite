import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 flex justify-between items-center" translate="no">
      <Link href="https://github.com/ipediez" className="text-sm text-gray-400">
        code by Ipediez
      </Link>
      <SocialIcons />
    </footer>
  );
};

export default Footer;
