import "./GamesTable.scss";
import { useGameHistory } from "../../hooks/useGameRecords";
import { getFormattedDate, formatSeconds } from "../../utils/i18n";

export const GamesTable = () => {
  const { pastGames } = useGameHistory();

  return (
    <div className="gamesTable">
      <table className="gamesTable__table">
        <thead className="gamesTable__table__header">
          <tr className="gamesTable__table__header__row">
            <th className="gamesTable__table__header__row__cell">Date</th>
            <th className="gamesTable__table__header__row__cell">Attempts</th>
            <th className="gamesTable__table__header__row__cell">Duration</th>
          </tr>
        </thead>
        <tbody className="gamesTable__table__body">
          {pastGames.map(({ date, attempts, duration }) => (
            <tr className="gamesTable__table__body__row" key={date}>
              <td className="gamesTable__table__body__row__cell">
                {getFormattedDate(date)}
              </td>
              <td className="gamesTable__table__body__row__cell">{attempts}</td>
              <td className="gamesTable__table__body__row__cell">
                {formatSeconds(duration)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
