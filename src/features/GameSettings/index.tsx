import "./GameSettings.scss";
import { DIFFICULTY_MODES } from "../../consts";
import { RadioInputCard } from "../../components/RadioInputCard";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const RADIO_GROUP_NAME = "pairsOfCards";

export const GameSettings = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/game");
  };

  return (
    <form onSubmit={handleStartGame} className="gameSettings">
      <fieldset className="gameSettings__inputs">
        <legend className="visually-hidden">Select difficulty level</legend>
        {DIFFICULTY_MODES.map(({ title, description, pairs }, index) => (
          <RadioInputCard
            name={RADIO_GROUP_NAME}
            title={title}
            description={description}
            value={pairs}
            defaultChecked={index === 0}
          />
        ))}
      </fieldset>
      <Button color="primary" size="lg" variant="contained" type="submit">
        Play for free
      </Button>
    </form>
  );
};
