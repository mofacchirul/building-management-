import React from 'react';

const Portfolio = () => {
    
    const imges = [
        {
          "id": 1,
          "img": "https://i.ibb.co.com/4ZrYQbCs/portfolio-4.jpg"
        },
        {
          "id": 2,
          "img": "https://i.ibb.co.com/d4vvy352/portfolio-3.jpg"
        },
        {
          "id": 3,
          "img": "https://i.ibb.co.com/cX7GZWD2/portfolio-2.jpg"
        },
        {
          "id": 4,
          "img": "https://i.ibb.co.com/TMS8wFD6/image-1.jpg"
        },
        {
          "id": 5,
          "img": "https://i.ibb.co.com/cS8949sr/experience.jpg"
        },
        {
          "id": 6,
          "img": "https://i.ibb.co.com/qMmmCV3k/blog-6.jpg"
        }
      ]
      


    return (
        <div className='lg:max-w-screen-xl lg:py-16 py-8 mx-auto'>
            <div className='space-y-3 text-center'>
                <p className='p-1 w-32  mx-auto rounded-xl border-sky-400 font-semibold  border-2'>Our Portfolio</p>
                <h2 className='lg:text-3xl text-xl text-sky-500 font-bold   '>
                Discover Our Builds
                </h2>


            </div>

            <div className=' py-5 grid grid-cols-2 gap-1 space-y-3 items-center justify-center lg:grid-cols-3'>
                {
                   imges?.map(imge=>
                    <div key={imge.id}>
                        <img src={imge.img}  className='object-fill duration-300 ease-in w-44 h-44 mx-auto rounded-2xl  lg:[500px] lg:w-[500px]' />
                    </div>
                  
                   ) 
                }
            </div>
        </div>
    );
};

export default Portfolio;