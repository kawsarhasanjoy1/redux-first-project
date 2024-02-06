import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <p className=" text-center text-3xl font-bold">My Todo</p>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
