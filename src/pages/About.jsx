import { Link } from "react-router-dom";
import aboutData from "../data/aboutData.json";
import { experience, education, skills } from "../utils/constants";
import SkillCard from "../components/SkillCard";
const About = () => {
  console.log(aboutData);
  return (
    <div className="relative">
      <div className="p-10 border border-gray-400 relative font-syne rounded-md">
        <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
          ABOUT ME
        </h2>
        {aboutData.about.map((item, idx) => (
          <p key={idx} className="text-gray-400 text-lg mb-4">
            {item}
          </p>
        ))}
        <hr className="my-6 mx-auto border-gray-500" />
        <div className="grid grid-flow-col text-gray-400 font-mono">
          <div className="grid grid-flow-col">
            <div className="">
              <h2>Name:</h2>
              <h2>City:</h2>
              <h2>Phone:</h2>
              <h2>Website:</h2>
            </div>
            <div>
              <h2>{aboutData.name}</h2>
              <h2>{aboutData.city}</h2>
              <h2 className="text-white cursor-pointer hover:underline underline-offset-4">
                {aboutData.phone}
              </h2>
              <h2 className="text-white cursor-pointer hover:underline underline-offset-4">
                {aboutData.website}
              </h2>
            </div>
          </div>
          <div className="grid grid-flow-col">
            <div>
              <h2>Age:</h2>
              <h2>Job:</h2>
              <h2>Email:</h2>
              <h2>Freelance:</h2>
            </div>
            <div>
              <h2>{aboutData.age}</h2>
              <h2>{aboutData.job}</h2>
              <h2 className="text-white cursor-pointer hover:underline underline-offset-4">
                {aboutData.email}
              </h2>
              <h2>{aboutData.freelance}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 border border-gray-400 relative font-syne rounded-md my-20">
        <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
          SKILLS
        </h2>
        <div className="flex flex-wrap">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill.title} />
          ))}
        </div>
      </div>
      <div className="p-10 border border-gray-400 relative font-syne my-24 rounded-md">
        <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10 rounded-md">
          TIMELINE
        </h2>

        <div className="grid grid-flow-col text-gray-400 font-mono">
          <div className="grid grid-flow-col">
            <div>
              <h2 className="text-white text-lg">WORKING EXPERIENCE</h2>
              {experience.map((org) => (
                <div key={org.id}>
                  <div className="flex justify-between items-center mt-8">
                    <div>
                      <h2 className="text-white text-sm">{org.company}</h2>
                      <p className="text-[12px]">{org.designation}</p>
                    </div>
                    <div>
                      <h2 className="border text-center px-2">
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
              <h2 className="text-white text-lg mb-8">EDUCATIONAL DETAILS</h2>
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-white text-sm">{edu.school}</h2>
                      <p className="text-[12px]">{edu.course}</p>
                    </div>
                    <div>
                      <h2 className="border text-center px-2">
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
      </div>

      <Link to="/projects">
        <button className="p-2 font-mono font-bold absolute  bg-slate-600 right-5 bottom-5 rounded-md  hover:text-orange-500">
          Explore My Projects!
        </button>
      </Link>
    </div>
  );
};

export default About;
