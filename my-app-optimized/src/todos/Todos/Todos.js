import {random} from "lodash-es";
import { useCallback, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

export default function Todos() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(
    new Array(2000).fill({ text: "ABC" }).map((t) => ({
      ...t,
      id: random(0, Number.MAX_SAFE_INTEGER),
    }))
  );

  console.log("render Todos");

  const handleDeleteItem = useCallback(function (item) {
    setTodos(todos.filter((t) => t.id !== item.id));
  }, [todos]);
  

  return (
    <div className="Todos">
      <TodoForm
        newTodoInput={newTodo}
        onNewTodoChange={(v) => setNewTodo(v)}
        onNewTodoAdd={(v) => {
          // todos.unshift({
          //       text: v,
          //       id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
          //     });

          //     setTodos(todos)
          //   }
          setTodos([
            {
              text: v,
              id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            },
            ...todos,
          ]);
        }
        }
      />
      <TodoList items={todos} onDeleteItem={handleDeleteItem} />
    </div>
  );
}
