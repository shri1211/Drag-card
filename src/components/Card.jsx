import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"



const Card = ({ deta, reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 5 }} className=' w-full relative flex-shrink-0 md:w-52 h-60 bg-zinc-900 rounded-b-[45px] rounded-t-[15px] p-4 overflow-hidden '>
      <FaFileLines color='white' />
      <p className='leading-tight mt-3 text-sm text-white font-semibold '>{deta.desc}</p>
      <div className='footer absolute bottom-0 h-20 w-full left-0 '>
        <div className='flex items-center justify-between text-white text-sm mb-3 px-8'>
          <h5>{deta.fileSize}</h5>
          <span className='w-5 h-5 rounded-full flex items-center justify-center'>
            {deta.close ? <IoClose size="1rem" /> : <LuDownload size="1rem" color='white' />}
          </span>
        </div>
        {deta.tagName.isOpen && (
          <div className={`tag w-full h-11 ${deta.tagName.tagColor === 'green' ? "bg-blue-500" : "bg-green-500"}   font-semibold flex justify-center items-center`}>
            <h1 className='text-sm font-semibold'>{deta.tagName.tagTitle}</h1>
          </div>
        )
        };
      </div>
    </motion.div>

  )
}

export default Card

// {
//   deta.tagName.isOpen ? (
//     <div className={`tag w-full h-11 bg-${deta.tagName.tagColor}-500 font-semibold flex justify-center items-center`}>
//       <h1 className='text-sm font-semibold'>{deta.tagName.tagTitle}</h1>
//     </div>
//   ) : null
// } 
