import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params }: Props) {
  const data = await getNewsDetail(params.slug);
  return (
    <>
      {JSON.stringify(data)}
      <main>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
        <div></div>
      </main>
    </>
  );
}
