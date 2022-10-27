import { Carousel } from "@mantine/carousel";
import assetLogo from "../assets/img/1-1.png";
import "../assets/css/Carousel.css";

export default function Slider() {
  return (
    <div>
      <Carousel
        className="carousel"
        mx="auto"
        withIndicators
        height={600}
        sx={{ top: 200 }}
      >
        <Carousel.Slide>
          <div className="carousel-box">
            <div className="img-box-carousel">
              <img src={assetLogo} className="carousel-img " alt="" />
            </div>
            <div className="text-box">
              <h1>Lorem ipsum dolor sit amet </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                finibus tortor nisl, a tempor neque imperdiet vel. Nulla
                facilisi. Pellentesque malesuada auctor ligula sit amet
                vehicula. Proin ut luctus ante, vitae rhoncus ex. Sed blandit
                mauris ut nunc iaculis, vel pharetra urna congue. Suspendisse
                gravida nunc porttitor justo cursus vestibulum. Proin lobortis
                augue sit amet metus viverra fringilla. Maecenas convallis
                maximus lacus, a dignissim turpis venenatis at. Sed in
                ullamcorper nunc, nec convallis leo. Nulla erat purus, imperdiet
                nec felis eu, viverra tristique elit. Quisque condimentum
                malesuada suscipit.
              </p>
              <button type="button">Daha Fazla</button>
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
      </Carousel>
    </div>
  );
}
