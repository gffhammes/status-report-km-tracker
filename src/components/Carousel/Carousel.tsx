import { Box } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { ReactNode } from "react";

export interface ICarouselProps<T> {
  data: T[];
  getSlide: (data: T, index: number) => ReactNode;
  slideFlex?: string;
  options?: Partial<EmblaOptionsType>;
}

export const Carousel = <T,>({
  data,
  slideFlex = "0 0 100%",
  getSlide,
  options,
}: ICarouselProps<T>) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <Box ref={emblaRef} sx={{ overflow: "hidden" }}>
      <Box sx={{ display: "flex", direction: "row" }}>
        {data.map((data, index) => (
          <Box sx={{ minWidth: 0, flex: slideFlex }} key={index}>
            {getSlide(data, index)}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
