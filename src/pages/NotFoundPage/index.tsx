import { Link } from "react-router-dom";
import { Typography } from "../../components/Typography";
import "./NotFoundPage.scss";

export const NotFoundPage = () => {
  return (
    <div className="wrapper">
      <Typography component={"h1"}>
        Looks like this page does not exist
      </Typography>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};
