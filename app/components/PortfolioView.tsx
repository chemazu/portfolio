import "../styles/components/PortfolioCard.scss";
import Image from "next/image";

import github from "../images/github.svg";
import liveimg from "../images/live.svg";

import Link from "next/link";

type Props = {
  project: {
    imageName: string;
    title: string;
    description: string;
    tech: Array<string>;
    git: string;
    live: string;
  };
};
// function PortfolioCard({}) {
const PortfolioCard: React.FC<Props> = ({ project }) => {
  const { imageName, title, description, tech, git, live } = project;
  return (
    <div className="parent ">
      {/* <div className={` portfolio-image ${imageName.imageName}`}></div> */}
      <div className={` portfolio-image ${imageName}`}></div>

      <div className="text-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="tech-used">
          {tech.map((i, k) => (
            <p key={k}>{i}</p>
          ))}
        </div>
        <div className="see-product">
          <div className="git">
            <Link href={`${git}`} rel="noopener noreferrer" target="_blank">
              <p>View Code</p> <Image src={github} width="30" alt="github" />
            </Link>
          </div>
          <div className="live">
            <Link href={`${live}`} rel="noopener noreferrer" target="_blank">
              <p>Live Demo</p> <Image src={liveimg} width="30" alt="github" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
