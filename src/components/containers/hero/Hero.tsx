import { FC } from "react";
import { Sun, Moon, Computer } from "lucide-react";

import { heroConfig } from "@temp/heroConfig";
import FeatureItem from "@components/containers/hero/FeatureItem";
import { useTheme } from "@context/context";
import { ThemeKeys } from "@types_/constants.enums";
import { Tabs, TabsList, TabsTrigger } from "@ui/tabs";

const Hero: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="bg-hero-pattern dark:bg-hero-dark-pattern my-8 rounded-2xl p-8 space-y-8 bg-cover bg-center">
      <div className="flex justify-between items-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6 uppercase font-medium space-x-1 
          tracking-[0.15rem] hover:tracking-[0.25rem] 
          transition-all duration-500 font-mont animate-fade-up">{heroConfig.tagline}</p>

        {/*Theme Tabs */}
        <Tabs className="shadow-md hover:shadow-lg transition-all animate-fade-up">
          <TabsList defaultValue={theme} className="p-1 h-9">
            <TabsTrigger value={ThemeKeys.LIGHT} onClick={() => setTheme(ThemeKeys.LIGHT)}><Sun size={16} /></TabsTrigger>
            <TabsTrigger value={ThemeKeys.DARK} onClick={() => setTheme(ThemeKeys.DARK)}><Moon size={16} /></TabsTrigger>
            <TabsTrigger value={ThemeKeys.SYSTEM} onClick={() => setTheme(ThemeKeys.SYSTEM)}><Computer size={16} /></TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex items-center flex-wrap gap-6 xl:gap-0">
        <div className="space-y-5 w-full xl:w-3/4">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl bg-gradient-to-br from-zinc-900 to-neutral-50 dark:to-zinc-900 dark:from-neutral-50 inline-block text-transparent bg-clip-text animate-fade-up animate-delay-100">{heroConfig.headline}</h1>
          <p className="leading-6 [&:not(:first-child)]:mt-6 font-mont font-medium animate-fade-up animate-delay-200">{heroConfig.description}</p>
        </div>
        <figure className="w-full xl:w-1/4 animate-fade-up animate-delay-200">
          <img src={heroConfig.heroImage} alt="Hero Image" className="object-cover w-auto h-[225px] mx-auto animate-spin animate-infinite animate-duration-[7000ms] animate-delay-0 animate-ease-linear animate-normal animate-fill-both" />
        </figure>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {heroConfig.highlights.map((item) => {
          return <FeatureItem item={item} key={item.headline}/>;
        })}
      </div>
    </section >
  );
};

export default Hero;