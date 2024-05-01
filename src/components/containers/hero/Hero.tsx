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
    <section className="my-8 space-y-8 rounded-2xl bg-hero-pattern bg-cover bg-center p-8 dark:bg-hero-dark-pattern">
      <div className="flex items-center justify-between">
        <p
          className="animate-fade-up space-x-1 font-mont font-medium uppercase 
          leading-7 tracking-[0.15rem] 
          transition-all duration-500 hover:tracking-[0.25rem] [&:not(:first-child)]:mt-6"
        >
          {heroConfig.tagline}
        </p>

        {/*Theme Tabs */}
        <Tabs className="animate-fade-up shadow-md transition-all hover:shadow-lg">
          <TabsList defaultValue={theme} className="h-9 p-1">
            <TabsTrigger
              value={ThemeKeys.LIGHT}
              onClick={() => setTheme(ThemeKeys.LIGHT)}
            >
              <Sun size={16} />
            </TabsTrigger>
            <TabsTrigger
              value={ThemeKeys.DARK}
              onClick={() => setTheme(ThemeKeys.DARK)}
            >
              <Moon size={16} />
            </TabsTrigger>
            <TabsTrigger
              value={ThemeKeys.SYSTEM}
              onClick={() => setTheme(ThemeKeys.SYSTEM)}
            >
              <Computer size={16} />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex flex-wrap items-center gap-6 xl:gap-0">
        <div className="w-full space-y-5 xl:w-3/4">
          <h1 className="inline-block animate-fade-up scroll-m-20 bg-gradient-to-br from-zinc-900 to-neutral-50 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent animate-delay-100 dark:from-neutral-50 dark:to-zinc-900 lg:text-4xl">
            {heroConfig.headline}
          </h1>
          <p className="animate-fade-up font-mont font-medium leading-6 animate-delay-200 [&:not(:first-child)]:mt-6">
            {heroConfig.description}
          </p>
        </div>
        <figure className="w-full animate-fade-up animate-delay-200 xl:w-1/4">
          <img
            src={heroConfig.heroImage}
            alt="Hero Image"
            className="mx-auto h-[225px] w-auto animate-spin object-cover animate-delay-0 animate-normal animate-duration-[7000ms] animate-fill-both animate-infinite animate-ease-linear"
          />
        </figure>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {heroConfig.highlights.map((item) => {
          return <FeatureItem item={item} key={item.headline} />;
        })}
      </div>
    </section>
  );
};

export default Hero;
