import React from 'react'

function AccordianItem({heading, content, onclickFn}) {



  return (
    <div onClick={(e) => {onclickFn(e)}} className="accordionItem3 rounded-md overflow-hidden w-full">
        <div className='heading bg-slate-900 px-6 py-3 font-semibold cursor-pointer text-lg flex justify-between items-center'>
                <h2 className='pointer-events-none'>{heading || "No Text Provided"}</h2>
                <p className='icon text-xl font-bold pointer-events-none'>+</p>
            </div>
            <div className={`content bg-slate-600 transition-max-height overflow-hidden ease-in-out duration-700 max-h-0`}>
                <p className='px-6 py-3'>{content || "No content available"}</p>
            </div>
    </div>
  )
}


export default AccordianItem
