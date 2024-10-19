const Shimmer = () => {
    return (
      <div className="shimmer-container flex flex-wrap gap-5 p-6 mt-10 mx-2">
        {Array(10).fill("").map((_, index) => (
          <div 
            key={index} 
            className="shimmer-card animate-pulse bg-gray-200 w-[314px] h-[360px] 
                       rounded-xl shadow-md border border-gray-200"
          >
            <div className="h-[220px] bg-gray-300 rounded-t-xl"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/2 mb-2"></div>
              <div className="flex justify-between mt-4">
                <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
                <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
              </div>
              <div className="h-4 bg-gray-300 rounded-md w-1/3 mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  




// const Shimmer = () => {
//     return(
//         <div className="shimmer-container">
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//         </div>
//     )
// }

export default Shimmer;