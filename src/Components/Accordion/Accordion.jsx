import React from 'react'
import AccordianItem from './AccordianItem'


const content1 = "Full stack development is the process of developing both the frontend and backend of applications. Any application has a frontend (user-facing) component and a backend (database and logic) component.";
const content2 = "The estimated total pay for a Full Stack Developer is ₹6,70,000 per year, with an average salary of ₹6,00,000 per year.";
const content3 = "A full stack developer can make a fully functioning web application. These website developers have some knowledge of both the back end (server side) and front end (client side). Full stack developers need little or no outside help in their work. This makes them especially valuable to employers.";
function unhideAccordionContent (ele){
    const element = ele.target;
    const contentChild = element.parentElement.querySelector(".content");
    if (contentChild.getAttribute("open") == "true"){
        contentChild.style.maxHeight = "0px";
        contentChild.parentElement.querySelector(".icon").textContent = "+";
        return;
    }
    const allContentChild = element.parentElement.parentElement.querySelectorAll(".content");
    allContentChild.forEach(ele => {
        ele.style.maxHeight = "0px";
        ele.parentElement.querySelector(".icon").textContent = "+";
        ele.setAttribute("open", "false");
    })
    contentChild.setAttribute("open", "true");
    contentChild.parentElement.querySelector(".icon").textContent = "-";
    contentChild.style.maxHeight = "600px";
}


function Accordion() {
  return (
    <div className='w-[600px] text-white flex flex-col gap-2'>
        <AccordianItem heading={"What do you MEAN by full stack?"} content={content1} onclickFn = {unhideAccordionContent}/>
        <AccordianItem heading={"What is the salary of a full-stack developer in India?"} content={content2} onclickFn = {unhideAccordionContent}/>
        <AccordianItem heading={"Why choose full stack?"} content={content3} onclickFn = {unhideAccordionContent}/>
    </div>
  )
}

export default Accordion
