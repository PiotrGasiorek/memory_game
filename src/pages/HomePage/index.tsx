import { Typography } from "../../components/Typography";
import { GameSettings } from "../../features/GameSettings";
import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div className="wrapper">
      <Typography component={"h1"}>
        Memory game when you do not know anyone at the party
        <br />
        <Typography component="span" variant="h5--regular">
          For those who want to look busy
        </Typography>
      </Typography>
      <GameSettings />
    </div>
  );
};
