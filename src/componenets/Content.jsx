import { Link } from "react-router-dom";
import "./Content.css"; // Import CSS file for styling

const Content = ({ heading, content }) => {
  return (
    <div className="content-center">
      <h1 className="content-heading">{heading}</h1>
      <p className="content-text">
        <ul>
          {content.map((item) => (
            <li>{item}</li>
          ))}
          <Link to="/">read more</Link>
        </ul>
      </p>
    </div>
  );
};

export default Content;
