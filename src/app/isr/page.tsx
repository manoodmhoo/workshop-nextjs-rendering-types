import IsrList from "@/features/isr/components/IsrList";
import { findAll } from "@/features/isr/api";

export default async function IsrPage() {
  const datas = await findAll();
  return (
    <>
      <h1 style={{ fontWeight: "bold", marginBottom: 10 }}>
        Incremental Static Regeneration (ISR)
      </h1>
      <IsrList datas={datas} />
    </>
  );
}

// Revalidate every 5 seconds
export const revalidate = 5;
