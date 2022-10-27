import { Carousel } from "@mantine/carousel";
import "../assets/css/Carousel.css";
import { useQuery } from "@tanstack/react-query";
import getSliders from "../utils/getSliders";
import { image } from "../types/image";

export default function Slider() {
  const { data, isLoading, isError } = useQuery(["sliders"], getSliders);

  console.log(data);

  const slides = data?.data.map((item) => {
    return (
      <SlideSingle
        key={item.id}
        content={item.attributes.content}
        title={item.attributes.title}
        image={item.attributes.image}
        url={item.attributes.url}
      />
    );
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Carousel
        className="carousel"
        mx="auto"
        withIndicators
        height={600}
        sx={{ top: 50 }}
      >
        {slides}
      </Carousel>
    </div>
  );
}

function SlideSingle(props: {
  image: image;
  title: string;
  content: string;
  url?: string;
}) {
  return (
    <Carousel.Slide>
      <div className="carousel-box">
        <div className="img-box-carousel">
          <img
            src={props.image.data.attributes.url}
            className="carousel-img "
            alt={props.image.data.attributes.name}
          />
        </div>
        <div className="text-box">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          {props.url && <a href={props.url}>Daha Fazla</a>}
        </div>
      </div>
    </Carousel.Slide>
  );
}
