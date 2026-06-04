import Image from "next/image";
import Banner from "./components/Banner";
import Marquee from "react-fast-marquee";
import ScrollingBookNames from "./components/ScrollingBookNames";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ScrollingBookNames></ScrollingBookNames>
    </div>
  );
}
