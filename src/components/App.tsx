import React from "react";
import { Text } from "./Text";
import { toUnicode } from "punycode";
import { Todo, Item } from "./Item";

type State = {
  todo: Todo;
  todos: Todo[];
  done_todo_ids: string[];
};

function getUniqueStr() {
  var strong = 1000;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
}

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      todo: {
        id: "0",
        subject: "",
        description: ""
      },
      todos: [],
      done_todo_ids: []
    };
  }

  componentDidMount() {
    // console.log("did mount")
  }

  componentDidUpdate(_: any, prevState: State) {
    // console.log("did update")
  }

  componentWillUnmount() {}

  onChange = (key: "subject" | "description") => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(key, event.target.value);
    const todo = { ...this.state.todo };
    todo[key] = event.target.value;
    this.setState({
      todo: todo
    });
  };

  onClick = () => {
    const id: string = getUniqueStr();
    const todo = { ...this.state.todo };
    todo["id"] = id;
    this.setState({
      todo: todo
    });
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  toggleDone = (id: string) => {
    let done_todo_ids: string[] = [...this.state.done_todo_ids];

    if (this.state.done_todo_ids.includes(id)) {
      done_todo_ids = done_todo_ids.filter(done_id => {
        return done_id != id;
      });
    } else {
      done_todo_ids.unshift(id);
    }
    this.setState({
      done_todo_ids: done_todo_ids
    });
  };

  onDelete = (id: string) => {
    console.log("uoaa");
    let todos = [...this.state.todos];
    todos = todos.filter(todo => {
      return todo.id != id;
    });
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>
          <label>
            タイトル
            <input type="text" onChange={this.onChange("subject")} />
          </label>
        </p>
        <p>
          <label>
            内容
            <input type="text" onChange={this.onChange("description")} />
          </label>
        </p>
        <button onClick={this.onClick}>追加</button>
        <ul>
          {this.state.todos.map((todo, i) => (
            <li key={i}>
              {this.state.done_todo_ids.includes(todo.id) ? (
                <s>
                  <Item todo={todo}></Item>
                </s>
              ) : (
                <Item todo={todo}></Item>
              )}
              <button
                onClick={() => {
                  this.toggleDone(todo.id);
                }}
              >
                完了
              </button>
              <button
                onClick={() => {
                  this.onDelete(todo.id);
                }}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
