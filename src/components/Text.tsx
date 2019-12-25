import React from "react";

type Props = {
  value: string;
};
export const Text: React.FunctionComponent<Props> = ({ value }) => {
  React.useEffect(() => {
    console.log("mount");
    return () => {
      <div>aaqa</div>;
    };
  }, []);

  React.useEffect(() => {
    console.log("value update");
  }, [value]);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={() => toggleOpen()}>トグル</button>
      {isOpen && <p>{value}</p>}
    </div>
  );
};
