import React from "react";
import "./App.css";
import cover from "./assets/cover.png";
import NavBar from "./sections/Navbar";
import Content from "./componenets/Content";
import Carousel from "./componenets/Carosal";
import GroupTestimonials from "./componenets/GroupTestimonials";
import Footer from "./sections/Footer";
import t1 from "./assets/testimonials/t1.jpg";
import t2 from "./assets/testimonials/t2.jpg";
import t3 from "./assets/testimonials/t3.jpg";
import t4 from "./assets/testimonials/usman.jpg";
import d1 from "./assets/doctors/d1.jpg";
import d2 from "./assets/doctors/d2.jpg";
import d3 from "./assets/doctors/d3.jpg";
import d4 from "./assets/doctors/d4.jpg";
import googleIcon from "./assets/google.png";
import Services from "./componenets/Services";
import { Link } from "react-router-dom";

const Home = () => {
  const testimonials = [
    {
      name: "Mr. Mark Hannery",
      avatar: t1,
      text: "Exceptional care and outstanding service - a hospital that truly puts patients first.",
    },
    {
      name: "Mr. John Innis",
      avatar: t2,
      text: "Highly skilled staff, state-of-the-art facilities, and a comforting environment - the perfect choice for healthcare.",
    },
    {
      name: "Mr. Mikeal Clark",
      avatar: t3,
      text: "Efficient, reliable, and dedicated to ensuring the well-being of their patients - a hospital you can trust.",
    },
    {
      name: "Mr. Usman Kabeer",
      avatar: t4,
      text: "A hospital that goes above and beyond, providing compassionate care with a personal touch.",
    },
  ];

  const content = [
    {
      heading: "Handling a Heart Attack",
      content: [
        "Call emergency services immediately",
        "Help the person sit or lie down",
        "Loosen tight clothing",
        "Administer aspirin",
        "Do not leave the person alone",
        "Be prepared to perform CPR",
      ],
    },
    {
      heading: "Handling a Brain Hemorrhage",
      content: [
        "Call emergency services immediately",
        "Keep the person calm and still",
        "Elevate the head slightly, unless you suspect a neck injury",
        "Do not give the person anything to eat or drink",
        "Monitor vital signs (breathing, pulse, and consciousness)",
        "Do not try to stop any bleeding from the head",
        "Stay with the person and provide reassurance",
      ],
    },
    {
      heading: "News and Discoveries",
      content: [
        "Researchers have unveiled a promising new drug candidate that shows significant efficacy in inhibiting the growth of cancer cells",
      ],
    },
  ];

  const doctors = [
    {
      image: d1,
      heading: "Dr. John Smith",
      content:
        "Cardiologist with extensive experience in treating heart conditions",
      buttonText: "Contact Me",
    },
    {
      image: d2,
      heading: "Dr. Clark Johnson",
      content: "Neurologist specializing in brain and nervous system disorders",
      buttonText: "Contact Me",
    },
    {
      image: d3,
      heading: "Dr. Innis Thompson",
      content:
        "Gynecologist providing comprehensive women's healthcare services",
      buttonText: "Contact Me",
    },
    {
      image: d4,
      heading: "Dr. John",
      content:
        "Heart Specialist with more than 10 years of experience in Surgery",
      buttonText: "Contact Me",
    },
  ];

  return (
    <div style={{ backgroundColor: "#d1d3d3" }}>
      <NavBar />
      <div style={{ display: "flex", flex: "1 2 1", flexDirection: "row" }}>
        <div
          style={{
            marginTop: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            flex: 1,
          }}
        >
          <Content heading={content[0].heading} content={content[0].content} />
          <Content heading={content[2].heading} content={content[2].content} />
        </div>
        <div style={{ flex: 2, margin: "20px auto", position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              backgroundImage: `url(${cover})`,
              opacity: "0.4",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "52%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1
              style={{ opacity: 1, textAlign: "center" }}
              className="App-header"
            >
              Hospital
            </h1>
            <p
              style={{ opacity: 1, textAlign: "center" }}
              className="content-text"
            >
              We serve the Humanity!
            </p>
            <img
              style={{ opacity: "1" }}
              alt="heart beat gif"
              height={200}
              width={500}
              src="https://www.coheedandcambria.com/sites/g/files/g2000013396/files/2022-01/heartbeat_1_Regular.gif"
            />
            <div
              style={{ display: "flex", flexDirection: "column" }}
              className="center"
            >
              <div>
                <button className="btn btn-primary">Login</button>
                &nbsp;
              </div>
              <h7
                className="content-text"
                style={{ fontSize: "12px", color: "rgb(82, 81, 81)" }}
              >
                Not Registered? <Link>Signup</Link>
              </h7>
              <h7
                style={{
                  color: "rgb(82, 81, 81)",
                  fontSize: "12px",
                }}
                className="content-text"
              >
                Or Sign in with
              </h7>{" "}
              <div>
                <button className="google-button">
                  &nbsp;
                  <img
                    width={20}
                    height={20}
                    alt="google icon"
                    src={googleIcon}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            flex: 1,
          }}
        >
          <Content heading={content[1].heading} content={content[1].content} />
          <button style={{ marginBottom: "10px" }} className="btn btn-danger">
            {" "}
            Conona Virus Alert!
          </button>
        </div>
      </div>
      <Carousel items={doctors} />
      <GroupTestimonials testimonials={testimonials} />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
