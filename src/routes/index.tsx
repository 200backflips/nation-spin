import { createFileRoute } from "@tanstack/react-router";
import { Dice5Icon } from "lucide-react";
import TeamCard from "../components/team-card";
import ManageTeams from "../components/manage-teams";
import useTeams from "@/hooks/teams";
import useGetCountries from "@/hooks/countries";
import { getRandomCountry } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function SpinButton() {
  return (
    <button className="flex items-center justify-center gap-2 bg-primary text-white text-2xl font-semibold mx-8 py-6 rounded-lg uppercase">
      <Dice5Icon className="size-9 fill-white stroke-black" />
      Spin
    </button>
  );
}

function RouteComponent() {
  const { teams } = useTeams();
  const { data: countries } = useGetCountries();

  const randomCountry = getRandomCountry(countries);
  console.log({ randomCountry });

  return (
    <>
      <div className="flex flex-col items-center gap-4 bg-accent border px-4 py-10 rounded-lg">
        <p className="uppercase">
          Use a <strong>single</strong> word associated with
        </p>
        <h1 className="uppercase">Brasil</h1>
        <div className="w-20 h-0.5 bg-primary" />
      </div>
      <SpinButton />
      <div>
        <div className="flex items-center justify-between">
          <h2>{teams.length > 0 ? teams.length : "No"} Teams playing</h2>
          <ManageTeams />
        </div>
      </div>
      <div
        className="flex-1 overflow-auto grid grid-cols-2 content-start gap-2"
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
