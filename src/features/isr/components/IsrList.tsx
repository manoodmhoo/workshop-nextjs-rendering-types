import { Isr } from "../types";

interface IsrListProps {
  datas: Isr[];
}

export default function IsrList({ datas }: IsrListProps) {
  return (
    <ul>
      {datas.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  );
}
