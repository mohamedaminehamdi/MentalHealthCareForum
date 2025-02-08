import Image from "next/image";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

// custom component for space sections
const CustomSection = ({
  customStyle,
  sectionHeader,
  sectionDesc,
  imageURL,
  headerText,
  order,
}) => {
  return (
    <div className="py-5">
      <div className={customStyle}>
        <div>
          <h1 className="my-10 font-semibold text-sm">{headerText}</h1>
          <h1 className="text-2xl w-3/4 font-bold my-2">{sectionHeader}</h1>
          <p className="my-4 text-sm text-slate-400 text-justify">
            {sectionDesc}
          </p>
        </div>
        <div
          className={`${order} place-self-center border-2 border-indigo-400 rounded-md p-1`}
        >
          <Image
            className="rounded-lg"
            src={imageURL}
            alt="Image"
            height={400}
            width={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

const Space = () => {
  const commonStyels = `grid lg:grid-cols-2 grid-cols-1 gap-4`;
  return (
    <div className="px-10 lg:py-32 py-20 bg-black text-white">
      <div className="flex lg:justify-between flex-col items-center mb-10">
        {/* <Image
          className="my-3"
          src="/contract.png"
          alt="forum image"
          height={100}
          width={100}
        ></Image> */}
        <h1 className="lg:text-4xl text-3xl font-semibold text-center">
          Dedicated sp
          <span className="border-b-2 border-indigo-400">ace</span> for <br />{" "}
          <span className="text-indigo-400">con</span>
          versations
        </h1>
        <p className="text-[8px] text-center py-4">
          Navigate to feed and discover hundreds of active <br />
          Communities on different niche
        </p>
      </div>

      <div className="my-5">
        {/* Proximity and visibility */}
        <CustomSection
          customStyle={commonStyels}
          headerText={"Personal growth and mental well-being"}
          sectionHeader={"Deep Breathing Exercises"}
          sectionDesc={
            "Inhale to a count of four.Hold your air in your lungs for a count of four.Exhale to a count of four.Hold your lungs empty for a count of four.Inhale and begin the pattern again."
          }
          imageURL={
            "https://img.freepik.com/premium-vector/adult-woman-doing-breathing-exercises-female-deep-inhales-exhales-air-relaxation-stress-relief_503113-766.jpg?w=740"
          }
        ></CustomSection>
<div className="flex justify-center items-center">
        <a
            href="https://www.youtube.com/watch?v=LiUnFJ8P4gM" 
            target="_blank" 
            rel="noopener noreferrer" className="hover:text-blue-700"
          >
            <button>
              Watch video <BsChevronRight className="inline-block font-bold" />
            </button>
          </a></div>
        {/* SERENDIPITOUS MOMENTS */}
        <CustomSection
          customStyle={commonStyels}
          order={"lg:order-first"}
          sectionHeader={
            "Meditation & Mindfulness"
          }
          sectionDesc={
            "Find a Quiet Place, Choose a calm spot with no distractions.Sit Comfortably Cross-legged on the floor or in a chair with a straight back."
          }
          imageURL={
            "https://img.freepik.com/free-vector/organic-flat-people-meditating-illustration_23-2148906556.jpg?t=st=1738973578~exp=1738977178~hmac=337b7bb49cdbc80db43b417e101cdf924b421ebdcef69592d2c54d883a7b76e5&w=740"
          }
        ></CustomSection>
<div className="flex justify-center items-center">
        <a
            href="https://www.youtube.com/watch?v=60Gnd8Wy0gE" 
            target="_blank" 
            rel="noopener noreferrer" className="hover:text-blue-700"
          >
            <button>
              Watch video <BsChevronRight className="inline-block font-bold" />
            </button>
          </a></div>
        {/*Productive coversations */}
        <CustomSection
          customStyle={commonStyels}
          sectionHeader={"Nature Walks"}
          sectionDesc={
            "Walking in nature, especially in forests or parks, can help lower stress and improve mood.Mindfully engage with the environment: listen to birds, feel the ground, observe trees."
          }
          imageURL={
            "https://img.freepik.com/free-vector/quality-time-nature-concept-illustration_114360-5098.jpg?t=st=1738973798~exp=1738977398~hmac=63710a65b381fd3c158fad26e9ec68c8d32530007b23e0489bad5bac6caa12f3&w=900"
          }
          
        ></CustomSection>
        <div className="flex justify-center items-center">
        <a
            href="https://www.youtube.com/watch?v=ipf7ifVSeDU" 
            target="_blank" 
            rel="noopener noreferrer" className="hover:text-blue-700"
          >
            <button>
              Watch video <BsChevronRight className="inline-block font-bold" />
            </button>
          </a></div>
      </div>
    </div>
  );
};

export default Space;
