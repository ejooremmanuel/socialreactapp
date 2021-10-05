import Department from "./Department";

export default function School() {
  let students = [
    {
      name: "Brad",
      age: 26,
      mat__no: "shaa-2021-001",
    },
    {
      name: "Grace",
      age: 23,
      mat__no: "shaa-2021-002",
    },
    {
      name: "Emmanuel",
      age: 26,
      mat__no: "shaa-2021-003",
    },
    {
      name: "Eunice",
      age: 30,
      mat__no: "shaa-2021-006",
    },
    {
      name: "Chidi",
      age: 32,
      mat__no: "shaa-2021-005",
    },
  ];
  return (
    <div style={{ fontSize: "24px" }}>
      <Department data={students} />
    </div>
  );
}
