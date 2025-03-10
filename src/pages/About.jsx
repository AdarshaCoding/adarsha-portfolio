import { Link } from "react-router-dom";
import aboutData from "../data/aboutData.json";
import { experience, education, skills } from "../utils/constants";
import SkillCard from "../components/SkillCard";
import { calculateAge } from "../utils/helper";

const About = () => {
  return (
    <div className="relative">
      <div className="p-10 border border-gray-400 relative font-syne rounded-md">
        <h2 className="font-semibold text-xs md:text-sm lg:text-md text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
          ABOUT ME
        </h2>
        {aboutData.about.map((item, idx) => (
          <p
            key={idx}
            className="text-gray-400 text-xs md:text-sm lg:text-md mb-4"
          >
            {item}
          </p>
        ))}
        <hr className="my-6 mx-auto border-gray-500" />
        <div className="grid grid-flow-row lg:grid-flow-col text-gray-400 font-mono text-xs md:text-sm lg:text-md">
          <div className="">
            <h2>Name: {aboutData.name}</h2>
            <h2>City: {aboutData.city}</h2>
            <h2 className="text-white cursor-pointer hover:underline underline-offset-4">
              Phone: {aboutData.phone}
            </h2>
            <h2>Website: {aboutData.website}</h2>
          </div>

          <div className="">
            <h2>Age: {calculateAge(aboutData.dob)} </h2>
            <h2>Job: {aboutData.job}</h2>
            <h2 className="text-white cursor-pointer hover:underline underline-offset-4">
              Email: {aboutData.email}
            </h2>
            <h2>Freelance: {aboutData.freelance}</h2>
          </div>
        </div>
      </div>
      <div className="p-10 border border-gray-400 relative font-syne rounded-md my-20">
        <h2 className="font-semibold text-xs md:text-sm lg:text-md text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
          SKILLS
        </h2>
        <div className="flex flex-wrap text-xs md:text-sm lg:text-md">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill.title} />
          ))}
        </div>
      </div>
      <div className="p-10 border border-gray-400 relative font-syne mt-24 rounded-md">
        <h2 className="font-semibold text-xs md:text-sm lg:text-md text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
          TIMELINE
        </h2>

        <div className="grid grid-flow-row lg:grid-flow-col text-gray-400 font-mono">
          <div className="grid grid-flow-col">
            <div className="w-full md:w-11/12">
              <h2 className="text-white text-sm md:text-md lg:text-lg">
                WORKING EXPERIENCE
              </h2>
              {experience.map((org) => (
                <div key={org.id}>
                  <div className="flex justify-between items-center mt-8">
                    <div>
                      <h2 className="text-white text-xs md:text-sm lg:text-md">
                        {org.company}
                      </h2>
                      <p className="text-[12px]">{org.designation}</p>
                    </div>
                    <div>
                      <h2 className="border text-center px-2 text-xs md:text-sm lg:text-md">
                        {org.startYear}-{org.currentOrg ? "Now" : org.endYear}
                      </h2>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>
              ))}
            </div>
            <div></div>
          </div>
          <div className="grid grid-flow-col">
            <div>
              <h2 className="text-white text-sm md:text-md lg:text-lg mb-8">
                EDUCATIONAL DETAILS
              </h2>
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-white text-xs md:text-sm lg:text-md">
                        {edu.school}
                      </h2>
                      <p className="text-[12px]">{edu.course}</p>
                    </div>
                    <div>
                      <h2 className="border text-center px-2 text-xs md:text-sm lg:text-md">
                        {edu.startYear}-{edu.endYear}
                      </h2>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to="/projects">
          <button className="p-2 text-xs md:text-[15px] font-mono font-bold absolute bg-slate-600 right-9 bottom-3 rounded-md hover:text-orange-500">
            Explore My Projects!
          </button>
        </Link>
      </div>

      <div className="my-10">
        <a href="/Adarsha_PC_Resume.pdf" download>
          <button className="p-2 px-5 text-xs md:text-lg rounded-md font-mono text-md font-bold hover:text-orange-500 bg-slate-600">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
