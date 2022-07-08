import { RiUser3Line } from "react-icons/ri";
import { HiOutlineCreditCard } from "react-icons/hi";
import { FaIcons } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import Stats from "../components/stats/Stats";
export default function SectionStats() {
  return (
    <div className="flex space-36 content-center wrap">
      <Stats icon={<RiUser3Line />} value={300} unit="K" label="Users Active" />
      <Stats icon={<FaIcons />} value={52.5} unit="K" label="Artworks" />
      <Stats
        icon={<IoColorPaletteOutline />}
        value={17.5}
        unit="K"
        label="Artist"
      />
      <Stats icon={<HiOutlineCreditCard />} value={35.85} label="ETH Spend" />
    </div>
  );
}
