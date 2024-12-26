import React from "react";

const Carousel = () => {
  return (
    <div className="max-w-full p-4 space-x-4 shadow-2xl carousel carousel-center mx-w-md rounded-box">
      {/* Carousel Item */}
      <section className="carousel-item">
        <div className="shadow-xl card image-full">
            <img className="z-10" src="/carousel/posters/1.jpeg" alt="Shoes" />
          <div className="z-10 justify-between h-full gap-5 p-5 card-body">
            <div className="flex flex-col items-center gap-5">
              <img className="w-20" src="/carousel/tv.png" alt="" />
              <img className="max-w-60" src="carousel/titles/1.png" alt="" />
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
      </section>
      {/* Carousel Item */}
      <section className="carousel-item">
        <div className="shadow-xl card image-full">
            <img className="z-10" src="/carousel/posters/2.jpeg" alt="Shoes" />
          <div className="z-10 justify-between h-full gap-5 p-5 card-body">
            <div className="flex flex-col items-center gap-5">
              <img className="w-20" src="/carousel/tv.png" alt="" />
              <img className="max-w-60" src="carousel/titles/2.png" alt="" />
            </div>
            <div className="flex flex-col items-center flex-none pb-10">
              <div className="flex flex-col items-center mb-5">
                <h2 className="text-2xl font-semibold text-white">Drama</h2>
                <p className="text-sm text-white/80">Family is a killer.</p>
              </div>
              <button className="h-10 font-normal text-black rounded-full btn-sm btn">
                Stream now
              </button>
            </div>
          </div>
      </div>
      </section>
      {/* Carousel Item */}
      <section className="carousel-item">
        <div className="shadow-xl card image-full">
            <img className="z-10" src="/carousel/posters/3.jpeg" alt="Shoes" />
          <div className="z-10 justify-between h-full gap-5 p-5 card-body">
            <div className="flex flex-col items-center gap-5">
              <img className="w-20" src="/carousel/tv.png" alt="" />
              <img className="max-w-60" src="carousel/titles/3.png" alt="" />
            </div>
            <div className="flex flex-col items-center flex-none pb-10">
              <div className="flex flex-col items-center mb-5">
                <h2 className="text-2xl font-semibold text-white">Comedy</h2>
                <p className=" text-md text-white/80">Will they makehistory...or fake it?</p>
              </div>
              <button className="h-10 font-normal text-black rounded-full btn-sm btn">
                Stream now
              </button>
            </div>
          </div>
      </div>
      </section>
      
      {/* Carousel Item */}
      <section className="carousel-item">
        <div className="shadow-xl card image-full">
            <img className="z-10" src="/carousel/posters/5.jpeg" alt="Shoes" />
          <div className="z-10 justify-between h-full gap-5 p-5 card-body">
            <div className="flex flex-col items-center gap-5">
              <img className="w-20" src="/carousel/tv.png" alt="" />
              <img className="max-w-60" src="carousel/titles/5.png" alt="" />
            </div>
            <div className="flex flex-col items-center flex-none pb-10">
              <div className="flex flex-col items-center mb-5">
                <h2 className="text-2xl font-semibold text-white">Comedy</h2>
                <p className="text-sm text-white/80">Kindness makes a comeback.</p>
              </div>
              <button className="h-10 font-normal text-black rounded-full btn-sm btn">
                Stream now
              </button>
            </div>
          </div>
      </div>
      </section>
      {/* Carousel Item */}
      <section className="carousel-item">
        <div className="shadow-xl card image-full">
            <img className="z-10" src="/carousel/posters/6.jpeg" alt="Shoes" />
          <div className="z-10 justify-between h-full gap-5 p-5 card-body">
            <div className="flex flex-col items-center gap-5">
              <img className="w-20" src="/carousel/tv.png" alt="" />
              <img className="max-w-60" src="carousel/titles/6.png" alt="" />
            </div>
            <div className="flex flex-col items-center flex-none pb-10">
              <div className="flex flex-col items-center mb-5">
                <h2 className="text-2xl font-semibold text-white">Thriller</h2>
                <p className="text-sm text-white/80">Emmy® Award winner.</p>
              </div>
              <button className="h-10 font-normal text-black rounded-full btn-sm btn">
                Stream now
              </button>
            </div>
          </div>
      </div>
      </section>
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

{
  /*
  <section className="carousel-item">
        <div className="shadow-xl card image-full">
            <img className="z-10" src="/carousel/posters/1.jpeg" alt="Shoes" />
          <div className="z-10 justify-between h-full gap-5 p-5 card-body">
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
      </section>
    
  
  */
}

export default Carousel;
