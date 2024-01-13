import GOLDEN_MART_2 from '../images/GOLDEN_MART_2.jpg';
const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap 8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
        <img className="w-full h-full object-cover rounded-lg" src={GOLDEN_MART_2} alt="Golden Mart Flyer" />

        </div>
      </div>
    </div>
  )
}

export default Hero