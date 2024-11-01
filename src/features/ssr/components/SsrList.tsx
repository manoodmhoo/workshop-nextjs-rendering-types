import { Ssr } from "../types";

interface SsrListProps {
  datas: Ssr[];
}

export default function SsrList({ datas }: SsrListProps) {
  return (
    <ul>
      {datas.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  );
}
