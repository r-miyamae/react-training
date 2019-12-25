import React from "react";
import { Text } from "./Text";
import { toUnicode } from "punycode";

type State = {
  todo: {
    subject: string;
    description: string;
  };
  todos: Todo[];
};
type Todo = {
  subject: string;
  description: string;
};

class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      todo: {
        subject: "",
        description: ""
      },
      todos: []
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
    const todo = this.state.todo;
    todo[key] = event.target.value;
    this.setState({
      todo: todo
    });
  };

  onClick = () => {
    this.setState({
      todos: [...this.state.todos, this.state.todo]
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
            <li key={i}>{todo.subject}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
