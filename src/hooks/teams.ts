import { create } from "zustand";

export interface Team {
  id: string;
  name: string;
  score: number;
}

interface TeamStore {
  teams: Team[];
  currentPlayingTeamId: string;
  addTeam: (team: Team) => void;
  removeTeam: (id: string) => void;
  updateTeamScore: (id: string, score: number) => void;
  setCurrentPlayingTeamId: (id: string) => void;
}

const storedTeams: Team[] = JSON.parse(localStorage.getItem("teams") || "[]");

const useTeams = create<TeamStore>((set) => ({
  teams: storedTeams,
  currentPlayingTeamId:
    JSON.parse(localStorage.getItem("currentPlayingTeamId") || "null") ||
    storedTeams?.[0]?.id ||
    "",
  setCurrentPlayingTeamId: (id) => {
    set({ currentPlayingTeamId: id });
    localStorage.setItem("currentPlayingTeamId", JSON.stringify(id));
  },
  addTeam: (team) =>
    set(({ teams }) => {
      const newTeams = [...teams, team];
      localStorage.setItem("teams", JSON.stringify(newTeams));

      return { teams: newTeams };
    }),
  removeTeam: (id) =>
    set(({ teams }) => {
      const filteredTeams = teams.filter((team) => team.id !== id);
      localStorage.setItem("teams", JSON.stringify(filteredTeams));

      return { teams: filteredTeams };
    }),
  updateTeamScore: (id, score) =>
    set(({ teams }) => {
      const updatedTeams = teams.map((team) =>
        team.id === id ? { ...team, score } : team,
      );
      localStorage.setItem("teams", JSON.stringify(updatedTeams));

      return { teams: updatedTeams };
    }),
}));

export default useTeams;
