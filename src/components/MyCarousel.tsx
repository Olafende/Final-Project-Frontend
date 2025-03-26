import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import LandingPhoto from "../assets/CarouselPhoto/landing_Photo.jpg"; 
import FastFood from "../assets/CarouselPhoto/FastFood.jpg"
import AsianFood from "../assets/CarouselPhoto/AsianFood.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



const MyCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const Images = [ 
    LandingPhoto, FastFood, AsianFood,

]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen-xl mx-fit|"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.reset()}
    >
      <CarouselContent>
        {Images.map((photo, index) => (
          <CarouselItem key={index}>
            <img src={photo} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MyCarousel;
