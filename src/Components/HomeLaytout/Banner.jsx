import BannerImg from "../../assets/banner.png";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <div className="flex justify-between ">
      <div className="w-1/2 py-12">
        <h2 className="text3xl lg:text-6xl font-bold text-metal-800 mb-6">
          Get The <span className="text-primary-500">Right Job</span> You
          Deserve
        </h2>
        <p className="text-xl text-metal-600">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>
      </div>
      <div>
        <motion.img
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-96"
          src={BannerImg}
        />
      </div>
    </div>
  );
};

export default Banner;
