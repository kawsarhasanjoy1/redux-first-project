import { ReactNode } from "react";

type TChildren = {
  children: ReactNode;
};

const Container = ({ children }: TChildren) => {
  return <div className=" w-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
