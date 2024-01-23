"use client";
import NewFooter from "@/components/layout/NewFooter"
import NewNavbar from "@/components/layout/NewNavbar"
import Faqs from "@/sections/Faqs"
import TopHeader from "@/sections/TopHeader"
import Galary from "@/sections/Galary"


export default function Home() {
	return (
		<main>
			<div id="__next">
      <NewNavbar />
      <h1 className="hidden">AI Nude.AI Generator</h1>
      
      <TopHeader />
     
      <Galary />
     
      <Faqs />

      <NewFooter />
    </div>
		</main>
	);
}
