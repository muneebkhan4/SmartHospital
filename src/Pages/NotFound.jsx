import NavBar from "../sections/Navbar";
import Footer from "../sections/Footer";

const SearchDisease = () => {
  return (
    <>
      <NavBar />
      <h1
        style={{
          backgroundColor: "#f4f26e",
          minHeight: window.innerHeight,
          alignContent: "center",
        }}
        className="App-header center"
      >
        Page Not Found
      </h1>
      <Footer />
    </>
  );
};

export default SearchDisease;
