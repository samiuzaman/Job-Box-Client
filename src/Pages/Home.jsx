import Banner from "../Components/HomeLaytout/Banner";
import HotJobs from "../Components/HomeLaytout/HotJobs";

const Home = () => {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto">
      <Banner></Banner>
      <HotJobs></HotJobs>
    </div>
  );
};

export default Home;
