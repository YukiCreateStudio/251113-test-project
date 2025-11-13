import NewsList from "../_components/NewsList";
import { getNewsList } from "../_libs/microcms";

export default async function page() {
  const data = await getNewsList();

  return (
    <>
      <NewsList news={data.contents} />
    </>
  );
}
