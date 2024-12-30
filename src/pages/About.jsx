import data from "../data/data.json";
const About = () => {
  console.log(data);
  return (
    <div>
      <div className="p-10 border border-gray-400 relative font-syne">
        <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10">
          ABOUT ME
        </h2>
        <p className="text-gray-400 text-lg">
          My name is Adarsha P C and I am a Web Developer, and I'm very
          passionate and dedicated to my work. With 5 years experience as a
          professional Web Developer, I have acquired the skills and knowledge
          necessary to make your project a success. I enjoy every step of the
          development process, from discussion and collaboration. Thanks a lot
          for your attention and your trust!
        </p>
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
              <h2>{data.name}</h2>
              <h2>{data.city}</h2>
              <h2 className="text-white cursor-pointer hover:underline underline-offset-4">
                {data.phone}
              </h2>
              <h2 className="text-white cursor-pointer hover:underline underline-offset-4">
                {data.website}
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
              <h2>{data.age}</h2>
              <h2>{data.job}</h2>
              <h2 className="text-white cursor-pointer hover:underline underline-offset-4">
                {data.email}
              </h2>
              <h2>{data.freelance}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 border border-gray-400 relative font-syne my-24">
        <h2 className="font-semibold text-black absolute top-[-18px] bg-zinc-200 p-2 px-10">
          TIMELINE
        </h2>

        <div className="grid grid-flow-col text-gray-400 font-mono">
          <div className="grid grid-flow-col">
            <div>
              <h2 className="text-white text-lg">WORKING EXPERIENCE</h2>
              <div>
                <div className="flex justify-between items-center mt-8">
                  <div>
                    <h2 className="text-white text-sm">LG Soft India</h2>
                    <p className="text-[12px]">Sr. Software Engineer</p>
                  </div>
                  <div>
                    <h2 className="border text-center px-2">2024-now</h2>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mt-8">
                  <div>
                    <h2 className="text-white text-sm">IQVIA</h2>
                    <p className="text-[12px]">Application Developer</p>
                  </div>
                  <div>
                    <h2 className="border text-center px-2">2022-2024</h2>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mt-8">
                  <div>
                    <h2 className="text-white text-sm">
                      Quinnox Consultancy Service
                    </h2>
                    <p className="text-[12px]">Senior Consultant</p>
                  </div>
                  <div>
                    <h2 className="border text-center px-3">2019-2022</h2>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mt-8">
                  <div>
                    <h2 className="text-white text-sm">
                      Mindtree Privated Limited
                    </h2>
                    <p className="text-[12px]">Module Lead</p>
                  </div>
                  <div>
                    <h2 className="border text-center px-3">2018-2019</h2>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mt-8">
                  <div>
                    <h2 className="text-white text-sm">IMS Health</h2>
                    <p className="text-[12px]">Application Developer</p>
                  </div>
                  <div>
                    <h2 className="border text-center px-3">2016-2018</h2>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
              <div>
                <div className="flex justify-between items-center mt-8">
                  <div>
                    <h2 className="text-white text-sm">
                      IGATE Global Solutions
                    </h2>
                    <p className="text-[12px]">Sr. Software Engineer</p>
                  </div>
                  <div>
                    <h2 className="border text-center px-3">2014-2016</h2>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="grid grid-flow-col">
            <div>
              <h2 className="text-white text-lg mb-8">EDUCATIONAL DETAILS</h2>
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-white text-sm">
                      Visvesvaraya Technological University
                    </h2>
                    <p className="text-[12px]">Bachelor Of Engineering</p>
                  </div>
                  <div>
                    <h2 className="border text-center px-2">2009-2013</h2>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-white text-sm">PES PU College</h2>
                  <p className="text-[12px]">Pre-University Course</p>
                </div>
                <div>
                  <h2 className="border text-center px-2">2007-2009</h2>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-white text-sm">
                    Secondary School Leaving Certificate
                  </h2>
                  <p className="text-[12px]">Gandhi High School</p>
                </div>
                <div>
                  <h2 className="border text-center px-2">2006-2007</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
