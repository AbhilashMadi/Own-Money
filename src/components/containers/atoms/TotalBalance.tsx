/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useRef, useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@ui/card";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ChevronRight, ChevronLeft } from "lucide-react";

import CreditCard from "@components/containers/atoms/CreditCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TotalBalance: FC = () => {
  const [_, setInt] = useState<boolean>();
  const [currentSlide, setCurrentSlide] = useState<number>(0); // Initialize currentSlide to 0

  const nextRef = useRef<HTMLButtonElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);

  const swiperOptions: SwiperProps = {
    slidesPerView: 1,
    spaceBetween: 10,
    modules: [Navigation, Pagination, Scrollbar, A11y],
    onSlideChange: (swiper) => {
      setCurrentSlide(swiper.realIndex);
    },
    navigation: {
      nextEl: nextRef.current,
      prevEl: prevRef.current,
    },
    onInit: () => setInt(true),
  };

  useEffect(() => {
    if (currentSlide === 0 && prevRef.current !== null) {
      prevRef.current.classList.add("text-gray-400");
    } else {
      prevRef.current && prevRef.current.classList.remove("text-gray-400");
    }

    if (currentSlide === 2 && nextRef.current !== null) {
      nextRef.current.classList.add("text-gray-400");
    } else {
      nextRef.current && nextRef.current.classList.remove("text-gray-400");
    }
  }, [currentSlide]);

  return (
    <>
      <p className="font-sm text-gray-400 pb-2">Total Balance</p>
      <Card className="hover:shadow-xl">
        <CardHeader>
          <CardTitle>
            $240,399
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Swiper {...swiperOptions}>
            {[...Array(3)].map((_, index) => {
              return <SwiperSlide key={index}>
                <CreditCard />
              </SwiperSlide>;
            })}
          </Swiper>
        </CardContent>

        <CardFooter className="flex justify-between py-4 transition-all duration-200 border-none">
          <button className="flex items-center" ref={prevRef} disabled={currentSlide === 0}>
            <ChevronLeft size={16} />Previous
          </button>
          <button className="flex items-center" ref={nextRef} disabled={currentSlide === 2}>
            Next<ChevronRight size={16} />
          </button>
        </CardFooter>
      </Card>
    </>
  );
};

export default TotalBalance;