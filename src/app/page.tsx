import HomeFooter from "@/components/layout/Footers/HomeFooter";
import HomeNavbar from "@/components/layout/NavBars/HomeNavbar";
import HomeProjects from "@/components/homec/sections/HomeProjects";
import HomeTeam from "@/components/homec/sections/HomeTeam";
import Teaching from "@/components/homec/sections/Teaching";
import WhatWedo from "@/components/homec/sections/WhatWedo";

export default function Home() {
  return (
    <div>
      <HomeNavbar />
      <WhatWedo />
      <HomeProjects />
      <HomeTeam />
      <Teaching />
      <HomeFooter />
    </div>
  );
}
