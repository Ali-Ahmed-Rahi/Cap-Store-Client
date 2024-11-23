const About = () => {
  return (
    <>
      <div className="bg-black text-white py-16 px-6 md:px-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-orange-500 text-sm font-semibold uppercase">
              How we started
            </h4>
            <h1 className="text-4xl font-bold text-white leading-snug mt-4">
              Our dream is to make products available for all in My Country
            </h1>
            <p className="text-white mt-6 leading-relaxed">
              At My Cap Store, we believe a cap is more than just an
              accessory; it’s a statement, a style, and sometimes even a story.
              Whether you're looking for the perfect finishing touch to your
              outfit, protection from the elements, or a custom design that
              screams you, we’ve got it all. <br /> From trendy snapbacks to timeless
              dad hats, premium sports caps to casual wear for every occasion,
              we offer quality and comfort in every stitch. Explore our wide
              range of designs or let us help you create something truly unique. <br />
              We’re not just here to sell caps; we’re here to crown your style.
              Take a look around and discover the perfect fit today!
            </p>
          </div>

          {/* Image Sec */}
          <div className="flex justify-center">
            <img
              src="https://m.media-amazon.com/images/I/61mnWpeZ33L._AC_UY1100_.jpg"
              alt="Workspace"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex-col md:flex-row lg:flex gap-6 mt-12 text-center justify-center ">
          <div className="border  p-6 rounded-lg  lg:w-1/2 mb-3 lg:mb-0">
            <h2 className="text-2xl font-bold text-purple-600">20.0K</h2>
            <p className="text-white">Total Likes</p>
            <span className="text-sm text-white">
              15% more than last month
            </span>
          </div>
          <div className="bg-black border p-6 rounded-lg shadow-md lg:w-1/2">
            <h2 className="text-2xl font-bold text-pink-500">1.6M</h2>
            <p className="text-white">Page Views</p>
            <span className="text-sm text-white">
              29% more than last month
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
