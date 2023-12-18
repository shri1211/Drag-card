import React, { useRef } from 'react'
import Card from './Card'



const Foreground = () => {
  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, temporibus. onsectetur adipisicing elit.",
      fileSize: "0.4MB",
      close: true,
      tagName: { isOpen: true, tagTitle: "Download", tagColor: "green" }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, temporibus. onsectetur adipisicing elit.",
      fileSize: "0.9MB",
      close: false,
      tagName: { isOpen: true, tagTitle: "Download", tagColor: 'blue' }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, temporibus. onsectetur adipisicing elit.",
      fileSize: "0.1MB",
      close: false,
      tagName: { isOpen: true, tagTitle: "Upload", tagColor: "green" }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, temporibus. onsectetur adipisicing elit.",
      fileSize: "0.78MB",
      close: true,
      tagName: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }
    },
  ]

  return (
    <div ref={ref} className='fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap'>

      {data.map((item, index) => (
        <Card key={index} deta={item} reference={ref} />
      ))}


    </div>

  )
}

export default Foreground
