import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Select,
  SelectAction,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectItem,
} from "keep-react";

const Footer = () => {
  return (
    <div className={` bg-metal-200 dark:bg-metal-900 shadow-small `}>
      <div className="mx-auto lg:px-20 px-6 py-10 2xl:px-0">
        <div className="flex flex-col gap-12 lg:flex-row">
          <footer className="w-full md:w-3/4 lg:w-1/2 mx-auto space-y-3">
            <h4 className="text-xl lg:text-3xl text-error-400 font-bold">
              React App
            </h4>
          </footer>

          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto space-y-3">
            <h4 className="mb-3 text-body-3 text-xl font-semibold text-metal-900 dark:text-white">
              Contact
            </h4>
            <p className="text-metal-600 mb-2 dark:text-metal-300">
              484 Trevor Junctions, Hettieport-17316, Columbia, USA
            </p>
            <p className="flex items-center gap-2 text-metal-600 mb-2 dark:text-metal-300">
              <FaPhone />
              16784518001
            </p>
            <p className="flex items-center gap-2 text-metal-600 dark:text-metal-300">
              <FaEnvelope />
              info@tutorworld.com
            </p>
          </div>

          <div className="w-full lg:w-1/2 mx-auto flex justify-between gap-2 md:justify-around">
            <footer>
              <h4
                className={`mb-3 text-body-3 text-xl font-semibold text-metal-900 dark:text-white`}
              >
                Social Media
              </h4>
              <ul className="flex flex-col gap-3 text-body-3 font-normal text-metal-600  dark:text-metal-300">
                <Link
                  to="https://www.facebook.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaFacebook />
                  Facebook
                </Link>
                <Link
                  to="https://www.facebook.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaInstagram />
                  Facebook
                </Link>
                <Link
                  to="https://www.linkedin.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaLinkedin />
                  LinkedIn
                </Link>
                <Link
                  to="https://x.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaTwitter />
                  Twitter
                </Link>
                <Link
                  to="https://youtube.com/"
                  className="flex items-center gap-2 hover:text-error-400 hover:underline"
                >
                  <FaYoutube />
                  Youtube
                </Link>
              </ul>
            </footer>
            <footer>
              <h4
                className={`mb-3 text-body-3 text-xl font-semibold text-metal-900 dark:text-white `}
              >
                Learning resources
              </h4>
              <ul className="flex flex-col gap-3 text-body-3 font-normal text-metal-600 dark:text-metal-300">
                <li>Language Test</li>
                <li>Language Challenge</li>
                <li>Podcasts</li>
                <li>Quiz</li>
                <li>Community</li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
      <div className={`border-t border-t-metal-400 py-5 text-cente `}>
        <p className="text-body-4 font-normal text-center text-metal-600 dark:text-metal-300">
          &copy;{new Date().getFullYear()} All Rights Reserved by &nbsp;
          <Link href="/" target="_blank" className="font-medium">
            React ltd
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
