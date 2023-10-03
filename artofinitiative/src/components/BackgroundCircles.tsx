import { motion } from 'framer-motion'

type Props = {}
const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.5, 1.5, 1, 1],
        opacity: [0.8, 0.25, 0.5, 0.1, 0.5],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",

      }}
      className='relative flex justify-center items-center top-28'>
      <div className='absolute border-2 border-red-500 rounded-full h-[100px] w-[100px] animate animate-ping ' />
      <div className='absolute border border-white  rounded-full h-[300px] w-[300px] opacity-60 ' />
      <div className='absolute border border-white  rounded-full h-[400px] w-[400px] opacity-40 ' />
      <div className='absolute border-2 border-red-500 rounded-full h-[500px] w-[500px] animate-pulse opacity-20 ' />
      <div className='absolute border border-white rounded-full h-[800px] w-[800px] opacity-80   ' />
      
    </motion.div>
    
  )
}
export default BackgroundCircles