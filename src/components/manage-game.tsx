import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import useTeams, { type Team } from "@/hooks/teams";
import { TrashIcon, UsersIcon } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import useCountdown, { TIMER_DURATIONS } from "@/hooks/countdown";

const formSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name must be at least 1 character long"),
});

const getDefaultValues = () => ({
  id: crypto.randomUUID(),
  name: "",
});

export default function ManageGame() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(),
  });
  const { teams, addTeam, removeTeam } = useTeams();
  const { durationSeconds, setDuration, isRunning } = useCountdown();

  function onSubmit(data: Team) {
    addTeam({ ...data, score: 0 });
    form.reset(getDefaultValues);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <h3 className="bg-amber-400 px-4 py-1 rounded-full">Manage game</h3>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-sm max-h-[90vh] grid-rows-[auto_auto_1fr]"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle>Manage game</DialogTitle>
          <DialogDescription>
            Change the game settings and manage your teams
          </DialogDescription>
        </DialogHeader>
        <h4>Settings</h4>
        <div className="flex items-center justify-between">
          <p>Turn duration (in seconds)</p>
          <div className="flex items-center gap-1">
            {TIMER_DURATIONS.map((duration) => (
              <Button
                key={duration}
                variant={duration === durationSeconds ? "default" : "outline"}
                size="icon"
                onClick={() => setDuration(duration)}
                disabled={isRunning}
              >
                {duration}
              </Button>
            ))}
          </div>
        </div>
        <Separator />
        <h4>Add new team</h4>
        <form
          id="form-team"
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-student-name">Name</FieldLabel>
                  <Input
                    {...field}
                    id="form-student-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter name"
                    autoComplete="off"
                    value={field.value || ""}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button form="form-team" disabled={form.formState.isSubmitting}>
              <UsersIcon /> Add
            </Button>
          </FieldGroup>
        </form>
        <Separator />
        <h4>{teams.length > 0 ? "Active teams" : "No active teams yet"}</h4>
        <div className="min-h-0 flex flex-col gap-2 overflow-auto">
          {teams.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1 + 0.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2 max-w-[85%]">
                <p className="truncate">{team.name}</p>
                <Badge variant="secondary">{team.score ?? 0}</Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={() => {
                  removeTeam(team.id);
                }}
              >
                <TrashIcon className="size-3 text-destructive stroke-3" />
              </Button>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
