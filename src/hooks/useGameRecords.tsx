import { useStorage } from "./useStorage";

export interface GameRecord {
  date: string;
  attempts: number;
  duration: number;
}

export const useGameHistory = () => {
  const { value: pastGames, setValue: setPastGames } = useStorage<GameRecord[]>(
    "past-games",
    localStorage,
    []
  );

  const addGameRecord = (record: GameRecord) => {
    setPastGames((prev) => [...prev, record]);
  };

  return {
    pastGames,
    addGameRecord,
  };
};
