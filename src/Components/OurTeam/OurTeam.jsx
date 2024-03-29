import shoyas from "../../assets/team/shoyas-2.webp";
import shagor from "../../assets/team/Rakibulislam1.webp";
import zehad from "../../assets/team/zehad.webp";
import bitue from "../../assets/team/bitue.webp";
import rifad from "../../assets/team/rifadul.webp";
import LinkedinIcon from "../icons/LinkedinIcon";
import { Link } from "react-router-dom";
import GitHubIcon from "../icons/GitHubIcon";
import PortfolioIcon from "../icons/PortfolioIcon";
import EmailIcon from "../icons/EmailIcon";

const OurTeam = () => {
  return (
    <div className="mt-20 mx-3">
      <h1 className="text-5xl font-semibold text-center text-[#0C5ADB] underline mt-10">
        Founders
      </h1>

      {/* <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-20 "> */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-20 ">
        <div>
          <div className="flex justify-center">
            <img className="rounded-full w-52 h-52" src={zehad} alt={zehad} />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mt-5 text-[#453F41]">
              Zehad Khan
            </h4>
            <p className="text-base mt-1 text-[#453F41]">PHP Developer</p>
          </div>
          <div className="flex justify-center mt-3">
            <Link to="/" className="p-2">
              <LinkedinIcon />
            </Link>
            <Link to="/" className="p-2">
              <GitHubIcon />
            </Link>
            <Link to="/" className="p-2">
              <EmailIcon />
            </Link>
            <Link to="/" className="p-2">
              <PortfolioIcon />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="rounded-full w-52 h-52" src={bitue} alt={bitue} />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mt-5 text-[#453F41]">
              Ashikul Islam Bitue
            </h4>
            <p className="text-base mt-1 text-[#453F41]">Django Developer</p>
          </div>
          <div className="flex justify-center mt-3">
            <Link to="/" className="p-2">
              <LinkedinIcon />
            </Link>
            <Link to="/" className="p-2">
              <GitHubIcon />
            </Link>
            <Link to="/" className="p-2">
              <EmailIcon />
            </Link>
            <Link to="/" className="p-2">
              <PortfolioIcon />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="rounded-full w-52 h-52" src={shoyas} alt={shoyas} />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mt-5 text-[#453F41]">
              Md. Nasir Uddin Shoyas
            </h4>
            <p className="text-base mt-1 text-[#453F41]">
              Full Stack Developer
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <Link
              to="https://www.linkedin.com/in/md-nasir-uddin4067"
              target="_blank"
              className="p-2"
            >
              <LinkedinIcon />
            </Link>
            <Link
              to="https://github.com/Shoyas"
              target="_blank"
              className="p-2"
            >
              <GitHubIcon />
            </Link>
            <Link
              to="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=md.nasiruddin4067@gmail.com"
              target="_blank"
              className="p-2"
            >
              <EmailIcon />
            </Link>
            <Link
              to="https://nasir-portfolio.netlify.app/"
              target="_blank"
              className="p-2"
            >
              <PortfolioIcon />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="rounded-full w-52 h-52" src={shagor} alt={shagor} />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mt-5 text-[#453F41]">
              Rakibul Islam
            </h4>
            <p className="text-base mt-1 text-[#453F41]">
              MERN Stack Developer
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <Link
              to="https://www.linkedin.com/in/iamrakib2/"
              target="_blank"
              className="p-2"
            >
              <LinkedinIcon />
            </Link>
            <Link
              to="https://github.com/Rakibulislam1"
              target="_blank"
              className="p-2"
            >
              <GitHubIcon />
            </Link>
            <Link
              to="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=rirakib03@gmail.com"
              target="_blank"
              className="p-2"
            >
              <EmailIcon />
            </Link>
            <Link
              to="https://rakibul-islam-v1.netlify.app/"
              target="_blank"
              className="p-2"
            >
              <PortfolioIcon />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="rounded-full w-52 h-52" src={rifad} alt={rifad} />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mt-5 text-[#453F41]">
              Md Rifadul Islam Rifad
            </h4>
            <p className="text-base mt-1 text-[#453F41]">
              MERN Stack Developer
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <Link
              to="https://www.linkedin.com/in/md-rifadul-islam-rifad-90aa612a5/"
              target="_blank"
              className="p-2"
            >
              <LinkedinIcon />
            </Link>
            <Link
              to="https://github.com/RF-Rifat"
              target="_blank"
              className="p-2"
            >
              <GitHubIcon />
            </Link>
            <Link to="_" target="_blank" className="p-2">
              <EmailIcon />
            </Link>
            <Link to="_" target="_blank" className="p-2">
              <PortfolioIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
