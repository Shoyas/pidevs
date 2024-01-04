import shoyas from "../../assets/team/shoyas-2.jpg";
import shagor from "../../assets/team/Rakibulislam1.jpg";
import zehad from "../../assets/team/zehad.png";
import bitue from "../../assets/team/bitue.png";
import LinkedinIcon from "../icons/LinkedinIcon";
import { Link } from "react-router-dom";
import GitHubIcon from "../icons/GitHubIcon";
import PortfolioIcon from "../icons/PortfolioIcon";
import EmailIcon from "../icons/EmailIcon";

const OurTeam = () => {
  return (
    <div className="mt-20 mx-3">
      <h1 className="text-5xl font-semibold text-center text-[#0C5ADB] underline mt-10">
        Founder Team Members
      </h1>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-20 ">
        <div>
          <div className="flex justify-center">
            <img className="rounded-full w-52 h-52" src={zehad} alt={zehad} />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mt-5 text-[#453F41]">
              Zehad Khan
            </h4>
            <p className="text-base mt-1 text-[#453F41]">
              General Manager | PHP Developer
            </p>
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
            <p className="text-base mt-1 text-[#453F41]">
              Associate Manager | Django Developer
            </p>
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
              Md. Naisr Uddin
            </h4>
            <p className="text-base mt-1 text-[#453F41]">
              Full Stack Developer
            </p>
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
      </div>
    </div>
  );
};

export default OurTeam;
