import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "@/Redux/Hook";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useAddTodoMutation } from "@/Redux/api/api";

const TodoModel = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const [addTodo, { data, isError, isLoading, isSuccess }] =
    useAddTodoMutation();

    console.log(data)

  const [position, setPosition] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 11);
    const todo = {
      id: id,
      title: task,
      description: description,
      priority: position,
    };


    addTodo(todo);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-primary-gradient">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add task That you want to finish
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                onBlur={(e) => setDescription(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className=" grid mx-auto grid-cols-4 items-center gap-4">
              <p>Priority</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className=" bg-primary-gradient">Filter</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="high">
                      High
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="medium">
                      Medium
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">
                      Low
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className=" flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoModel;
