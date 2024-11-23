const ContactInfo = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-gray-50">
        <div className=" p-8 w-full text-center">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm  mb-6">
          We are here to assist you. Contact us today!
          </p>
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            {/* Address Section */}
            <div className="flex flex-col items-center text-white">
              <img
                src="https://img.icons8.com/ios/50/000000/marker.png"
                alt="Address Icon"
                className="w-10 mb-2 text-white"
              />
              <h3 className="text-sm font-semibold mb-1">ADDRESS</h3>
              <p className="text-sm ">27 13 Lowe Haven</p>
            </div>
            {/* Phone Section */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/ios/50/000000/phone.png"
                alt="Phone Icon"
                className="w-10 mb-2"
              />
              <h3 className="text-sm font-semibold mb-1">PHONE</h3>
              <p className="text-sm text-gray-700">111 343 43 43</p>
            </div>
            {/* Email Section */}
            <div className="flex flex-col items-center">
              <img
                src="https://img.icons8.com/ios/50/000000/new-post.png"
                alt="Email Icon"
                className="w-10 mb-2"
              />
              <h3 className="text-sm font-semibold mb-1">EMAIL</h3>
              <p className="text-sm text-gray-700">business@info.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
