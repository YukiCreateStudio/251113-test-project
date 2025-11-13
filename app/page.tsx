import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { getNewsList, News } from "@/app/_libs/microcms";
import Hero from "./_components/Hero";
import { NEWS_LIST_LIMIT } from "./_constants";

export default async function Home() {
  const sliceData = await getNewsList({ limit: NEWS_LIST_LIMIT });

  return (
    <>
      <Hero
        title={"テクノロジーの力で世界を変える"}
        description={
          "私たちは市場をリードしているグローバルテックカンパニーです。"
        }
      />
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
