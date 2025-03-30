import { Typography } from "../../components/Typography";
import { GamesTable } from "../../features/GamesTable";
import { useGameHistory } from "../../hooks/useGameRecords";
import "./DashboardPage.scss";

export const DashboardPage = () => {
  const { pastGames } = useGameHistory();

  return (
    <div className="dashboardPage">
      <Typography className="dashboardPage__title" component="h1" variant="h3">
        Statistics
      </Typography>
      {pastGames.length ? (
        <div className="dashboardPage__tableWrapper">
          <GamesTable />
        </div>
      ) : (
        <Typography
          className="dashboardPage__fallback"
          component="h2"
          variant="h5"
        >
          Ooops! You haven't played any games in the past
        </Typography>
      )}
    </div>
  );
};
