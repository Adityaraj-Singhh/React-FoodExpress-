


const Contact = () => {
    // return (
    //     <div className="contact">
    //         <h1 className="font-bold text-3xl p-4 m-4">Contact</h1>
    //         <form>
    //             <input type="text" className=" border border-black p-2 m-2" placeholder="Name"/>
    //             <input type="email" className="border border-black p-2 m-2" placeholder="Email"/>
    //             <button className="border border-black p-2 m-2 bg-gray-300 rounded-lg">Submit</button>
    //         </form>

            
    //     </div>
    // )

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            {/* Header */}
            <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
              Contact Us
            </h1>
      
            {/* Contact Form */}
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
      
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
      
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
      
}
export default Contact;