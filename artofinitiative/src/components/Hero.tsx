import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Art Nooijen", "Coder, Reader, DM", "Dice Addict?"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mx-auto">

      <BackgroundCircles />


      <img
        src="https://yt3.ggpht.com/yti/ADpuP3OPqVCBPEJvNMT9fRKMbxcrqFUmgGdQfvRrBfd1lg=s108-c-k-c0x00ffffff-no-rj"
        alt="Art Nooijen"
        className="  rounded-full h-40 w-40  shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-gray-300 hover:animate-pulse "
      />


      <h1 className="text-white font-extrabold text-4xl ">
        <span >{text}</span>
        <Cursor cursorColor="white" />
      </h1>
    </div>
  );
};

export default Hero;
