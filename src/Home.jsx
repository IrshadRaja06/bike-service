import React from 'react';
import motorcycle from "./assets/motorcycle.jpg";

const Home = () => {
  return (
    <div>
      <div className="row container-fluid mt-5">
        <div className="col-12 col-lg-6 col-sm-12 ms-5">
          <h1>Bike Service</h1>
          <p>"Keep your bike running smoothly with our expert service. Regular maintenance ensures safety and extends your bike's lifespan. Our team provides top-notch repairs, tune-ups, and inspections. From brake adjustments to tire checks, we've got you covered. Trust us for quick, reliable service at competitive prices. Ride worry-free with our comprehensive care.

We also offer personalized service plans tailored to your riding habits. Need a quick fix? Our express service gets you back on the road in no time. We use only high-quality parts to guarantee durability and performance. Book your bike service today and experience the difference professional care can make!"</p>
        </div>
        <div className="col d-flex justify-content-center ps-5">
          <img src={motorcycle} alt='bike' className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Home;
