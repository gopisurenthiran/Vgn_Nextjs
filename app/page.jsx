import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/homes/home-1/Blogs";
import Categories from "@/components/common/Categories";
import Cities from "@/components/homes/home-1/Cities";
import Facts from "@/components/homes/home-4/Facts";
import HelpCenter from "@/components/homes/home-1/HelpCenter";
import Hero from "@/components/homes/home-1/Hero";
import LoanCalculator from "@/components/homes/home-1/LoanCalculator";
import Partners from "@/components/homes/home-1/Partners";
import Properties from "@/components/homes/home-1/Properties";
import Properties2 from "@/components/homes/home-1/Properties2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Landform from "@/components/form/land_form";
import VideoReview from "@/components/video/video";
import Category from "@/components/category/category";
import Section from "@/components/category/section";
import Contact from "@/components/category/contact";
import Selling from "@/components/category/selling";
import Property from "@/components/category/property";
import Brands from "@/components/category/brand";
import React from "react";


export const metadata = {
  title: "CMDA & RERA Approved Villa Plots in Chennai | VGN Homes",
  description: "Proty - Real Estate React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <div className="main-content ">
         <Facts />
         <Categories />
         <Properties />
         <VideoReview/>
         <Category />
         <Section/>
         <Contact/>
         <Selling/>
         <Property/>
         <Testimonials />
         <Brands/>
          {/* <HelpCenter /> */}
         {/* <Landform/> */}
        {/* <LoanCalculator />
            <Cities /> */}
        {/* <Properties2 /> */}
         {/* <Partners /> */}
        <Blogs />
     
        
      </div>
      <Footer1 />
    </>
  );
}
