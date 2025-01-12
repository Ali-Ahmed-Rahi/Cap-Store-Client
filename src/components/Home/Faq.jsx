const Faq = () => {
  return (
    <>
      <div className="join join-vertical w-full mt-10">
        <div className="collapse collapse-arrow join-item border-green-600 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          Can I customize a cap with my own design?
          </div>
          <div className="collapse-content">
            <p>Absolutely! We offer custom embroidery and printing services. Just upload your design, and we’ll take care of the rest.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-green-600  border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          What types of caps do you offer?
          </div>
          <div className="collapse-content">
            <p>We offer a wide range of caps, including snapbacks, baseball caps, trucker hats, dad hats, bucket hats, and more.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-green-600  border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          Can I track my order?
          </div>
          <div className="collapse-content">
            <p>Yes, you’ll receive a tracking number once your order has been shipped.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-green-600  border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          Do you have a physical store?
          </div>
          <div className="collapse-content">
            <p>We’re an online store, but we occasionally host pop-up shops. Stay tuned to our social media for updates.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
