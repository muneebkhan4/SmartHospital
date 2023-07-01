import NavBar from "../sections/Navbar";
import DiseaseSearch from "../componenets/DiseaseSearch";
import Footer from "../sections/Footer";

const SearchDisease = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{ backgroundColor: "#d1d3d3", minHeight: window.innerHeight }}
      >
        <DiseaseSearch />
      </div>
      <Footer />
    </div>
  );
};

export default SearchDisease;
