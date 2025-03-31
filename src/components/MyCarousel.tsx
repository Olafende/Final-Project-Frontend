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
      className="w-screen object-cover"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent className="w-full">
        {Images.map((photo, index) => (
          <CarouselItem key={index} className="w-full">
            <img src={photo} alt={`Slide ${index + 1}`} className="w-full h-[500px] object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MyCarousel;
