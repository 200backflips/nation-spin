import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleQuestionMarkIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const points = [
  {
    number: 3,
    order: "first",
  },
  {
    number: 2,
    order: "second",
  },
  {
    number: 1,
    order: "third",
  },
];

export default function GameInstructions() {
  return (
    <Dialog>
      <DialogTrigger>
        <CircleQuestionMarkIcon className="size-6" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>How to play</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          Nation Spin is a team-based, word association game.
        </DialogDescription>
        <DialogDescription>
          For each turn, one member will give a single word clue about the
          country on the screen. Your team scores points based on how many clues
          the other members need to guess the correct country.
        </DialogDescription>
        <Separator />
        <h4>Points system</h4>
        <div className="flex flex-col gap-2">
          {points.map((point) => (
            <div
              key={point.number}
              className="flex items-center justify-start gap-2 p-4 border rounded-md bg-accent"
            >
              <p className="size-8 flex items-center justify-center bg-primary text-white rounded-full">
                {point.number}
              </p>
              <p className="text-base">
                For guessing right on the <strong>{point.order}</strong> clue
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
