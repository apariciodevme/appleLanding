import React from "react";

const Carousel = () => {
  return (
    <div className="overflow-hidden carousel carousel-center mx-w-md rounded-box">
      <div className="flex flex-col items-start min-h-full shadow-xl carousel-item card bg-base-100 image-full">
        <figure>
          <img className="z-10" src="/carousel/posters/1.jpeg" alt="Shoes" />
        </figure>

        <div className="z-10 justify-between h-full gap-5 p-5 jus card-body">
          <div className="flex flex-col items-center gap-5">
            <img className="w-20" src="/carousel/tv.png" alt="" />
            <img className="max-w-96" src="carousel/titles/1.png" alt="" />
          </div>
          <div className="flex flex-col items-center flex-none pb-10">
            <div className="flex flex-col items-center mb-5">
              <h2 className="text-2xl font-semibold text-white">Sci-Fi</h2>
              <p className="text-sm text-white/80">New season.</p>
            </div>
            <button className="h-10 font-normal text-black rounded-full btn-sm btn">
              Stream now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/*.carousel-item {
  box-sizing: content-box;
  display: flex;
  flex: none;
  scroll-snap-align: start;
}
.carousel-start .carousel-item {
  scroll-snap-align: start;
}
.carousel-center .carousel-item {
  scroll-snap-align: center;
}
.carousel-end .carousel-item {
  scroll-snap-align: end;
}*/

export default Carousel;
