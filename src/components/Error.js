
import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    // return (
    //     <div className="error">
    //         <h1>OOps !!!</h1>
    //         <h2>Something went wrong</h2>
    //         <h3>{err.status} : {err.statusText}</h3>
    //     </div>
    // )
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center border border-red-300">
                <h1 className="text-4xl font-bold text-red-600">Oops!!!</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mt-2">Something went wrong</h2>
                <h3 className="text-lg text-gray-500 mt-4">
                    {err.status} : {err.statusText}
                </h3>
                <button 
                    className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
    
}

export default Error;



// import { useRouteError } from "react-router-dom"; -> this is the hook provided my react-router-dom
// It gives information about the error.
