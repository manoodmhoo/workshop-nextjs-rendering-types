import { Ssg } from "../types";

interface SsgListProps {
  datas: Ssg[];
}

export default async function SsgList({ datas }: SsgListProps) {
  return (
    <ul>
      {datas.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  );
}
