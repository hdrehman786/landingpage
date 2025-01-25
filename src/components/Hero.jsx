// import React from "react";
// import { Carousel } from "antd";

// const contentStyle = {
//   margin: 0,
//   height: "300px",
//   color: "#fff",
//   lineHeight: "300px",
//   textAlign: "center",
//   background: "#364d79",
// };

// function Hero() {
//   const categories = [
//     "Men's Fashion",
//     "Women's Fashion",
//     "Electronics",
//     "Home & Lifestyle",
//     "Medicine",
//     "Sports and Outdoors",
//     "Baby's Toys",
//   ];

//   return (
//     <div className="hero container flex flex-col md:flex-row mx-auto px-4 md:px-8 lg:px-16 h-screen">
//       {/* Left Content */}
//       <div className="hero__content flex flex-col mt-6 md:mt-12 font-serif w-full md:w-1/3">
//         <h2 className="text-2xl font-bold mb-4 md:mb-6 lg:mb-8 text-center md:text-left">
//           Categories
//         </h2>
//         {categories.map((category, index) => (
//           <h4
//             key={index}
//             className="mt-3 text-lg md:text-xl lg:text-2xl text-center md:text-left hover:underline cursor-pointer"
//           >
//             {category}
//           </h4>
//         ))}
//       </div>

//       {/* Divider */}
//       <div className="border-l border-gray-200 hidden md:block"></div>

//       {/* Right Content */}
//       <div className="hero__slide w-full md:w-2/3 mt-6 md:mt-12 md:ml-8">
//         <Carousel autoplay arrows={true} dotPosition="bottom" infinite>
//           <div>
//             <img
//               className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
//               src="https://images.unsplash.com/photo-1606901300018-10dafd493f97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
//               alt="Fashion"
//             />
//           </div>
//           <div>
//             <img
//               className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
//               src="https://images.unsplash.com/photo-1606901300018-10dafd493f97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
//               alt="Electronics"
//             />
//           </div>
//           <div>
//             <img
//               className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
//               src="https://images.unsplash.com/photo-1606901300018-10dafd493f97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
//               alt="Home"
//             />
//           </div>
//           <div>
//             <img
//               className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
//               src="https://images.unsplash.com/photo-1606901300018-10dafd493f97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
//               alt="Lifestyle"
//             />
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default Hero;
