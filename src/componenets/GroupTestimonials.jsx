import Testimonial from "./Testimonial";
import img from "../logo.svg";

const GroupTestimonials = ({ testimonials }) => {
  return (
    <div
      className="testimonial-center"
      style={{
        height: "wrap-content",
        marginLeft: "80px",
        marginRight: "80px",
        marginBottom: "50px",
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "50px",
        paddingRight: "50px",
        margin: "50px",
      }}
    >
      <h1
        style={{ fontWeight: "bold", fontSize: "40px", marginBottom: "20px" }}
        className="testimonial-text"
      >
        Our Legacy
      </h1>
      <p className="testimonial-text" style={{ marginBottom: "100px" }}>
        For over 10 years, our hospital has been a beacon of happiness,
        <br /> consistently delivering quality healthcare services
        <br />
        with a smile to uplift and inspire our patients.
      </p>
      <div style={{ flexDirection: "row" }} className="testimonial-center">
        {testimonials.map((item) => (
          <Testimonial
            key={item.name}
            name={item.name}
            avatar={item.avatar}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupTestimonials;
