const Services = () => {
  return (
    <>
      <div
        style={{ marginTop: "40px", marginBottom: "60px" }}
        className="center"
      >
        <div className="m-3">
          <img
            width={200}
            height={200}
            src="https://www.ahnneighborhood.org/ahn-assets/uploads/New-Overnght-Care-Icon.png"
            alt="Icon of Outpatient Services"
          />
          <h3 style={{ color: "#e830a1", marginTop: "20px" }}>
            Over Night Care
          </h3>
        </div>
        <div className="m-3">
          <img
            decoding="async"
            className="serv-icon"
            src="https://www.ahnneighborhood.org/ahn-assets/uploads/ahn_icon_emergency2.png"
            alt="Icon of Outpatient Services"
          />
          <h3 style={{ color: "#e830a1" }}>Emergency Care</h3>
        </div>
        <div className="m-3">
          <img
            decoding="async"
            className="serv-icon"
            src="https://www.ahnneighborhood.org/ahn-assets/uploads/ahn_icon_inpatient.png"
            alt="Icon of Outpatient Services"
          />
          <h3 style={{ color: "#e830a1" }}>Outpatient Services</h3>
        </div>
        <div className="m-3">
          <img
            decoding="async"
            className="serv-icon"
            src="https://www.ahnneighborhood.org/ahn-assets/uploads/ahn_icon_diagnostic.png"
            alt="Icon of Outpatient Services"
          />
          <h3 style={{ color: "#e830a1" }}>Diagnostic Services</h3>
        </div>
      </div>
    </>
  );
};

export default Services;
