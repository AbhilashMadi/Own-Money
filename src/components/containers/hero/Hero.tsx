import { FC } from "react";

import { heroConfig } from "@temp/heroConfig";
import FeatureItem from "@components/containers/hero/FeatureItem";

const Hero: FC = () => {
  return (
    <section className="bg-hero-pattern my-10 rounded-2xl p-8 space-y-8 bg-cover bg-center">
      <p className="leading-7 [&:not(:first-child)]:mt-6 uppercase font-medium space-x-1 
          tracking-[0.15rem] hover:tracking-[0.25rem] 
          transition-all duration-500 font-mont">{heroConfig.tagline}</p>
      <div className="flex flex-wrap gap-4 xl:gap-0">
        <div className="space-y-5 w-full xl:w-3/4">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">{heroConfig.headline}</h1>
          <p className="leading-6 [&:not(:first-child)]:mt-6 font-mont font-medium">{heroConfig.description}</p>
        </div>
        <figure className="w-full xl:w-1/4">
          <img src={heroConfig.heroImage} alt="Hero Image" className="object-cover w-auto h-[225px] mx-auto animate-spin animate-infinite animate-duration-[7000ms] animate-delay-0 animate-ease-linear animate-normal animate-fill-both" />
        </figure>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {heroConfig.highlights.map((item) => {
          return <FeatureItem item={item} key={item.headline} />;
        })}
      </div>
    </section >
  );
};

export default Hero;