import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import ContactInfo from "../components/Home/ContactInfo";
import Faq from "../components/Home/Faq";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Testimonial from "../components/Home/Testimonial";

const Home = () => {
  return (
    <>
      <div className="w-full bg-black text-white">
        <Banner></Banner>

        <div className="w-4/5 mx-auto my-16 ">
          <h1 className="text-4xl font-bold text-center mb-10">
            Featured Product
          </h1>
          <FeaturedProducts></FeaturedProducts>
        </div>
        <div className="w-4/5 mx-auto my-16">
          <h1 className="text-4xl font-bold text-center mb-10">
            Product Category
          </h1>
          <Category></Category>
        </div>
        <div className="w-4/5 mx-auto my-16">
          <h1 className="text-4xl font-bold text-center mb-10">Testimonials</h1>
          <Testimonial></Testimonial>
        </div>

        <div className="w-4/5 mx-auto mt-12 mb-10 border">
          <ContactInfo></ContactInfo>
        </div>
        <div className="w-4/5 mx-auto my-16">
          <h1 className="text-4xl font-bold text-center mb-10">
            Frequently Asked Question
          </h1>
          <Faq></Faq>
        </div>
      </div>
    </>
  );
};

export default Home;
