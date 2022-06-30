import React from 'react'
import './MyCard.css'

function MyCard() {
    return (
        <div className='MyCard'>
            <div className='divider'>
            <div className='icon-div'> <img className='aworan' src="https://media.istockphoto.com/photos/young-scientist-using-a-pipette-to-analyzing-a-sample-in-a-lab-picture-id1257372719?b=1&k=20&m=1257372719&s=170667a&w=0&h=-SGSupjd8oGTKKKdqiMud2iEJPt4DN7mIhHu8CWBDj4=" alt="" /></div>
            <p  className="Topic">
                RESEARCH SOLUTIONS
            </p>
            <p  className='Content'>
                Get the right data to boost your research by choosing from our variety of applications
            </p>
            <div className='button-div'><button id='BB'> Browse Through Our Resaerch Solution <i className="fa-solid fa-vial-circle-check"></i></button></div>
            </div>

            <div className='divider'>
            <div className='icon-div'> <img className='aworan' src="https://connectfood.com/wp-content/uploads/2019/04/shutterstock_1208519902.jpg" alt="" /></div>
            <p  className="Topic">
                FOOD SOLUTIONS
            </p>
            <p  className='Content'>
            We provide leading edge learning content targeted at professionals and
             scientists who need to upgrade their proficiency both in industry and academics.
            </p>
            <div className='button-div'><button id='BB'> Browse Through Our Food Solution <i className="fa-solid fa-vial-circle-check"></i></button></div>
            </div>
            <div className='divider'>
            <div className='icon-div'> <img className='aworan' src="https://media.istockphoto.com/photos/modern-medical-research-laboratory-portrait-of-latin-and-black-young-picture-id1346675635?k=20&m=1346675635&s=612x612&w=0&h=IIGVUl5yLfovC5EyJMXdmypvnUswwXsU6eIlHSkrpy4=" alt="" /></div>
            <p  className="Topic">
                LEARNING SOLUTIONS
            </p>
            <p  className='Content'>
            We provide leading edge learning content targeted at professionals
             and scientists who need to upgrade their proficiency both in industry and academics.
            </p>
            <div className='button-div'><button id='BB'> Browse Through Our Learning Solution <i className="fa-solid fa-vial-circle-check"></i></button></div>
            </div>
        </div>

    )
}

export default MyCard
