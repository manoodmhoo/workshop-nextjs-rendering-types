import SsgList from "@/features/ssg/components/SsgList";
import { findAll } from "@/features/ssg/api";

export default async function SsgPage() {
  const datas = await findAll();
  return (
    <>
      <h1 style={{ fontWeight: "bold", marginBottom: 10 }}>
        Static Site Generation (SSG)
      </h1>
      <SsgList datas={datas} />
    </>
  );
}
