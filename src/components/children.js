import GrandChild from "./grandchild";

export default function Children() {
  return (
    <div
      style={{
        border: "10px solid #000000",
        marginLeft: "50px",
        padding: "10px",
        fontSize: "30px",
        width: "300px",
      }}
    >
      <GrandChild />
    </div>
  );
}
