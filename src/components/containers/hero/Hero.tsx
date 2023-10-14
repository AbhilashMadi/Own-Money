import { FC } from "react";

import { heroConfig } from "@temp/heroConfig";
import FeatureItem from "@components/containers/hero/FeatureItem";

const Hero: FC = () => {
  return (
    <section className="bg-hero-pattern my-10 rounded-2xl p-8 space-y-8 bg-cover bg-center">
      <p className="leading-7 [&:not(:first-child)]:mt-6 uppercase font-medium space-x-1 
          tracking-[0.15rem] hover:tracking-[0.25rem] 
          transition-all duration-500 font-mont">{heroConfig.tagline}</p>
      <div className="grid grid-cols-4">
        <div className="col-span-3 space-y-5">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">{heroConfig.headline}</h1>
          <p className="leading-6 [&:not(:first-child)]:mt-6 font-mont font-medium">{heroConfig.description}</p>
        </div>
        <div>
          <img src={heroConfig.heroImage} alt="Hero Image" className="object-cover w-[225px] h-[225px] mx-auto animate-spin animate-infinite animate-duration-[6000ms] animate-delay-0 animate-ease-linear animate-normal animate-fill-both" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {heroConfig.highlights.map((item) => {
          return <FeatureItem item={item} />;
        })}
      </div>
    </section >
  );
};

export default Hero;