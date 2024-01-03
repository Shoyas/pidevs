import DemoArea from "../Components/HomeComponents/DemoArea/DemoArea";
import HeroArea from "../Components/HomeComponents/HeroArea/HeroArea";
import WhyChooseArea from "../Components/HomeComponents/WhyChooseArea/WhyChooseArea";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroArea />
      <DemoArea />
      <WhyChooseArea />
    </div>
  );
};

export default Home;
