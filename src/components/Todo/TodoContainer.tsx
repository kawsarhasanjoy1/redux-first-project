/* eslint-disable @typescript-eslint/no-explicit-any */
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModel from "./TodoModel";
import { useGetTodosQuery } from "@/Redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState('');

  // const todos = useAppSelector((state) => state.TtrTodos.todos);

  const { data } = useGetTodosQuery(priority);

  return (
    <div>
      <div className=" flex justify-between mb-5">
        <TodoModel />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full p-[5px] rounded-lg">
        <div className=" bg-white space-y-5 p-4">
          {data?.data.map((item: any) => (
            <TodoCard
              key={item?.id}
              id={item?._id}
              title={item?.title}
              description={item?.description}
              priority={item?.priority}
              isCompleted={item?.isCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
