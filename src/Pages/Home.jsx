import DemoArea from "../Components/HomeComponents/DemoArea/DemoArea";
import DoneProjectArea from "../Components/HomeComponents/DoneProjectArea/DoneProjectArea";
import HeroArea from "../Components/HomeComponents/HeroArea/HeroArea";
import ResponsiveLayoutArea from "../Components/HomeComponents/ResponsiveLayoutArea/ResponsiveLayoutArea";
import WhyChooseArea from "../Components/HomeComponents/WhyChooseArea/WhyChooseArea";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroArea />
      <DemoArea />
      <WhyChooseArea />
      <ResponsiveLayoutArea />
      <DoneProjectArea />
    </div>
  );
};

export default Home;
