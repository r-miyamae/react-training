import React from "react";
import { regExpLiteral } from "@babel/types";

export type Todo = {
  id: string;
  subject: string;
  description: string;
};

type Props = {
  todo: Todo;
};

export const Item: React.FunctionComponent<Props> = ({ todo }) => {
  return (
    <div>
      <p>
        {todo.id}
        {todo.subject}: {todo.description}
      </p>
    </div>
  );
};
