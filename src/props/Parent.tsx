import { ChildAsFc } from "./Child";

const parent = () => {
  return (
    <ChildAsFc color="red" onClick={() => console.log("clicked")}></ChildAsFc>
  );
};

export default parent;
