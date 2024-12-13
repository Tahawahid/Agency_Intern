import React from "react";

const StatisticsSection = () => {
  const statisticsData = [
    {
      id: 1,
      imgSrc: "images/icons/startup.svg",
      altText: "years",
      number: "15",
      suffix: "+",
      description: "Year In Business",
    },
    {
      id: 2,
      imgSrc: "images/icons/team.svg",
      altText: "team",
      number: "80",
      suffix: "+",
      description: "Team Members",
    },
    {
      id: 3,
      imgSrc: "images/icons/deal.svg",
      altText: "happy",
      number: "450",
      suffix: "",
      description: "Happy Clients",
    },
    {
      id: 4,
      imgSrc: "images/icons/computers.svg",
      altText: "project",
      number: "48",
      suffix: "k",
      description: "Projects Done",
    },
    {
      id: 5,
      imgSrc: "images/icons/worker.svg",
      altText: "work",
      number: "95",
      suffix: "k",
      description: "Hours Worked",
    },
    {
      id: 6,
      imgSrc: "images/icons/customer-service.svg",
      altText: "support",
      number: "24",
      suffix: "/7",
      description: "Support Available",
    },
  ];

  return (
    
//     <div className="statistics-section bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-16">
//   <div className="container mx-auto px-6">
//     {/* Top Row - Centered */}
//     <div className="flex justify-center items-center mb-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center text-center">
//         {statisticsData.slice(0, 2).map((item) => (
//           <div
//             key={item.id}
//             className="statistics flex flex-col items-center justify-center"
//           >
//             <div
//               className="statistics-img"
//               data-tilt
//               data-tilt-max="20"
//               data-tilt-speed="1000"
//             >
//               <img src={item.imgSrc} alt={item.altText} className="w-16 h-16 mb-4" />
//             </div>
//             <div className="statnumb text-white">
//               <span className="counter text-4xl font-bold">
//                 {item.number}
//               </span>
//               <span className="text-xl font-semibold">{item.suffix}</span>
//               <p className="text-lg mt-2">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* Bottom Row */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center text-center mt-10">
//       {statisticsData.slice(2).map((item) => (
//         <div
//           key={item.id}
//           className="statistics flex flex-col items-center justify-center"
//         >
//           <div
//             className="statistics-img"
//             data-tilt
//             data-tilt-max="20"
//             data-tilt-speed="1000"
//           >
//             <img src={item.imgSrc} alt={item.altText} className="w-16 h-16 mb-4" />
//           </div>
//           <div className="statnumb text-white">
//             <span className="counter text-4xl font-bold">
//               {item.number}
//             </span>
//             <span className="text-xl font-semibold">{item.suffix}</span>
//             <p className="text-lg mt-2">{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
<div className="statistics-section bg-green-200 py-16">
  <div className="container mx-auto px-6">
    {/* Top Row - Centered */}
    <div className="flex justify-center items-center mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 justify-center text-center ">
        {statisticsData.slice(0, 2).map((item) => (
          <div
            key={item.id}
            className="statistics flex flex-col items-center justify-center"
          >
            <div
              className="statistics-img bg-white p-4 rounded-full shadow-lg flex items-center justify-center mb-4"
              data-tilt
              data-tilt-max="20"
              data-tilt-speed="1000"
            >
              <img src={item.imgSrc} alt={item.altText} className="w-12 h-12" />
            </div>
            <div className="statnumb text-white">
              <span className="counter text-4xl font-bold">
                {item.number}
              </span>
              <span className="text-xl font-semibold">{item.suffix}</span>
              <p className="text-lg mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-center text-center mt-2">
      {statisticsData.slice(2).map((item) => (
        <div
          key={item.id}
          className="statistics flex flex-col items-center justify-center"
        >
          <div
            className="statistics-img bg-white p-4 rounded-full shadow-lg flex items-center justify-center mb-4"
            data-tilt
            data-tilt-max="20"
            data-tilt-speed="1000"
          >
            <img src={item.imgSrc} alt={item.altText} className="w-12 h-12" />
          </div>
          <div className="statnumb text-white">
            <span className="counter text-4xl font-bold">
              {item.number}
            </span>
            <span className="text-xl font-semibold">{item.suffix}</span>
            <p className="text-lg mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  );
};

export default StatisticsSection;
