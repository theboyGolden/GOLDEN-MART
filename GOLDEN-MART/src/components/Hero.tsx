// Hero.js

import GOLDEN_MART_2 from '../images/GOLDEN_MART_2.jpg';
import hoodie from '../images/hoodide.jpeg';
import camera from '../images/Camera.jpeg';

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-4">
        {/* First Column (GOLDEN_MART image) */}
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-span-2 relative flex items-center">
          <img className="w-full h-full object-cover rounded-lg" src={GOLDEN_MART_2} alt="Golden Mart Flyer" />
        </div>

        {/* Second Column (Two divs with images) */}
        <div className="xl:col-span-1 flex flex-col gap-4">
          <div style={{ height: '220px', width: '220px' }}>
            <img className="w-full h-full object-cover rounded-lg" src={hoodie} alt="Hoodie" />
          </div>
          <div style={{ height: '220px', width: '220px' }}>
            <img className="w-full h-full object-cover rounded-lg" src={camera} alt="Gen-Z Camera" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
