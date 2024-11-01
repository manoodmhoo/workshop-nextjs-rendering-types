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
// 1. เมื่อเวลาผ่านไป 5 วินาที หน้าเว็บจะคืนผลลัพธ์เก่าออกมาก่อน
// 2. เมื่อมี Request ใหม่เข้ามา หน้าเว็บจะทำการ Revalidate และคืนผลลัพธ์ใหม่ออกมา
export const revalidate = 5;
