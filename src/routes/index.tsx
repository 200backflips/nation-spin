import { createFileRoute } from "@tanstack/react-router";
import { Dice5Icon } from "lucide-react";
import TeamCard from "../components/team-card";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const teams = [
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam Blom",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
];

function RouteComponent() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 bg-accent border px-4 py-10 rounded-lg">
        <p className="uppercase">
          Use a <strong>single</strong> word associated with
        </p>
        <h1 className="uppercase">Brasil</h1>
        <div className="w-20 h-0.5 bg-primary" />
      </div>
      <button className="flex items-center justify-center gap-2 bg-primary text-white text-2xl font-semibold mx-8 py-6 rounded-lg uppercase">
        <Dice5Icon className="size-9 fill-white stroke-black" />
        Spin
      </button>
      <div>
        <div className="flex items-center justify-between">
          <h2>{teams.length > 0 && `${teams.length} `}Teams</h2>
          <button>
            <h3 className="bg-amber-400 px-4 py-1 rounded-full">
              Manage teams
            </h3>
          </button>
        </div>
      </div>
      <div
        className="flex-1 overflow-auto grid grid-cols-2 gap-2"
        onScroll={(event) => {
          const { currentTarget } = event;
          const { scrollTop, clientHeight, scrollHeight } = currentTarget;

          currentTarget.classList.toggle("mask-t-from-90%", scrollTop > 0);
          currentTarget.classList.toggle(
            "mask-b-from-90%",
            scrollTop + clientHeight < scrollHeight,
          );
        }}
      >
        {teams.map((team) => (
          <TeamCard key={team.id} {...team} />
        ))}
      </div>
    </>
  );
}
