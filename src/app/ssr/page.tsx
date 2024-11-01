import { findAll } from "@/features/ssr/api";
import SsrList from "@/features/ssr/components/SsrList";

export default async function SsrPage() {
  const datas = await findAll();
  return (
    <>
      <h1 style={{ fontWeight: "bold", marginBottom: 10 }}>
        Server-Side Rendering (SSR)
      </h1>
      <SsrList datas={datas} />
    </>
  );
}

// จะทำงานใหม่ทุกครั้งที่มี Request เข้ามา
export const dynamic = "force-dynamic";
