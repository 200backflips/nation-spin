import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleQuestionMarkIcon } from "lucide-react";

export default function GameInstructions() {
  return (
    <Dialog>
      <DialogTrigger>
        <CircleQuestionMarkIcon className="size-5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>How to play</DialogTitle>
          <DialogDescription>Yackety smackety, rules go here</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
