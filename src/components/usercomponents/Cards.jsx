// import React from 'react';
// import { Link } from 'react-router-dom';

// const Cards = ({ data }) => {
//   return (
//     <div className="w-full sm:w-1/2 md:w-1/4 p-2 group">
//       <div className="h-[400px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex flex-col">
//         <div className="relative h-1/2 overflow-hidden">
//           <img 
//             className="w-full h-full object-contain transition-all duration-500 ease-in-out transform group-hover:scale-110" 
//             src={data.image} 
//             alt={data.title} 
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
//         <div className="p-5 flex-grow flex flex-col justify-between">
//           <div>
//             <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300 dark:text-white line-clamp-2 h-14 overflow-hidden">
//               {data.title}
//             </h5>
//             <p className="mb-3 font-normal text-gray-700 group-hover:text-gray-900 transition-colors duration-300 dark:text-gray-400">${data.price.toFixed(2)}</p>
//           </div>
//           <Link to={`/Product/${data.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group-hover:animate-pulse">
//             View Details
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;



// import React from 'react'
// import { Link } from 'react-router-dom'

// const Cards = (props) => {
//   const { id, title, image, price } = props.data
//   return (
//     <>
//       <div className="w-full sm:w-1/2 md:w-1/4 p-2 transform hover:-translate-y-1 transition-all duration-300">
//         <div className="shadow-lg shadow-blue-800/50 m-1 mb-5 bg-blue-800 hover:bg-[#6e2c00] rounded-lg">
//           <div className="h-[350px] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
//             <div className="card-img w-full h-[50%] overflow-hidden rounded-t-lg">
//               <Link to={`/productdetail/${id}`} >
//                 <img 
//                   className="h-full w-full object-cover rounded-t-lg shadow-md shadow-blue-400 hover:shadow-cyan-500/50 hover:scale-105 hover:animate-pulse transition-transform duration-300" 
//                   src={image} 
//                   alt={title} 
//                 />
//               </Link>
//             </div>
//             <div className="p-5 flex flex-col h-[50%]">
//               <Link to={`/productdetail/${id}`}  className="flex-grow">
//                 <h5 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2 text-lg">
//                   {title}
//                 </h5>
//               </Link>
//               <p className="mb-4 font-bold text-xl text-blue-600 dark:text-blue-400">
//                 $ {price}
//               </p>
//               <Link 
//                 to={`/productdetail/${id}`} 
//                 className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transform hover:scale-105 transition-transform duration-300"
//               >
//                 View Detail
//                 <svg 
//                   className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
//                   aria-hidden="true" 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   fill="none" 
//                   viewBox="0 0 14 10"
//                 >
//                   <path 
//                     stroke="currentColor" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     strokeWidth="2" 
//                     d="M1 5h12m0 0L9 1m4 4L9 9" 
//                   />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Cards



import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ data }) => {
  const { id, title, image, price } = data;

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-2 group">
      <div className="h-[400px] bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex flex-col">
        {/* Image Container */}
        <div className="relative h-1/2 overflow-hidden bg-white p-4">
          <Link to={`/productdetail/${id}`}>
            <div className="relative h-full w-full overflow-hidden">
              <img 
                className="w-full h-full object-contain transition-all duration-500 ease-in-out transform group-hover:scale-110" 
                src={image} 
                alt={title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        </div>

        {/* Content Container */}
        <div className="p-5 flex-grow flex flex-col justify-between bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="space-y-2">
            <Link to={`/productdetail/${id}`}>
              <h5 className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300 dark:text-white line-clamp-2">
                {title}
              </h5>
            </Link>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${typeof price === 'number' ? price.toFixed(2) : price}
            </p>
          </div>

          {/* Button */}
          <Link 
            to={`/productdetail/${id}`} 
            className="mt-4 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group/btn"
          >
            View Details
            <svg 
              className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;