import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ManageTeams() {
  return (
    <Dialog>
      <DialogTrigger>
        <h3 className="bg-amber-400 px-4 py-1 rounded-full">Manage teams</h3>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Manage Teams</DialogTitle>
        </DialogHeader>
        <p>fook</p>
      </DialogContent>
    </Dialog>
  );
}
