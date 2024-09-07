import { Layout } from "@/components/layout";
import { useRouter } from "next/router";

export default function Forum() {
  const router = useRouter();
  return (
    <Layout>
      <p>Post: {router.query.slug}</p>
    </Layout>
  );
}
