import { Layout } from "@/components/layout";
import { useRouter } from "next/router";

export default function Forum() {
  const router = useRouter();
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <p>Post: {router.query.slug}</p>
      </div>
    </Layout>
  );
}
