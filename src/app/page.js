import Image from "next/image";

import Banner from "./components/Banner";
import Marquee from "react-fast-marquee";
import ScrollingBookNames from "./components/ScrollingBookNames";
import TopBooks from "./components/TopBooks";
import CategoryBooks from "./components/CategoryBooks";
import { User } from "lucide-react";
import UserReview from "./components/UserReview";
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ScrollingBookNames></ScrollingBookNames>
      <TopBooks></TopBooks>
      <CategoryBooks></CategoryBooks>
      <UserReview></UserReview>
      
    </div>
  );
}
