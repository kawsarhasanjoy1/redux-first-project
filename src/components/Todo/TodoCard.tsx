import { useAppDispatch } from "@/Redux/Hook";
import { Button } from "../ui/button";
import { removeTodo, toggleIsComplate } from "@/Redux/Feature/TtrSlice";
import { useUpdateTodoMutation } from "@/Redux/api/api";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  priority: string;
};

const TodoCard = ({ id, title, description, isCompleted, priority }: TTodo) => {
  const dispatch = useAppDispatch();

  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  const toggle = (id: string) => {
    const option = {
      id: id,
      data: {
        title,
        description,
        isCompleted: !isCompleted,
        priority,
      },
    };
    updateTodo(option);
  };

  return (
    <div className=" flex justify-between items-center px-5 bg-white p-3 rounded-md border">
      {" "}
      <input
        className="mr-2"
        onChange={() => toggle(id)}
        type="checkbox"
        name=""
        id=""
        defaultChecked={isCompleted}
      />
      <p className=" flex-1 flex items-center">{title}</p>
      <div className=" flex-1">{priority}</div>
      <div className=" flex-1">
        {isCompleted ? (
          <p className=" text-red-300">Done</p>
        ) : (
          <p className=" text-green-400">pending</p>
        )}
      </div>
      <p className=" flex-[2]">{description}</p>
      <div className=" flex gap-4">
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
          Del
        </Button>
        <Button className="bg-green-500">Edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
