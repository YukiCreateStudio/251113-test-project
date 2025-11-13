import { createClient } from "microcms-js-sdk";

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSContentId,
} from "microcms-js-sdk";

export type Category = {
  name: string;
};

export type News = {
  id: string;
  title: string;
  category: { name: string };
  publishedAt: string;
  createdAt: string;
  description: string;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent &
  MicroCMSContentId;

export type MembersType = {
  id: string;
  image: any;
  name: string;
  position: string;
  profile: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_DOMAIN) {
  throw new Error("MICROCMS_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<MembersType>({
    endpoint: "members",
    queries,
    customRequestInit: {
      next: { revalidate: 60 },
    },
  });
  return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: "news",
    queries,
    customRequestInit: {
      next: { revalidate: 60 },
    },
  });
  return listData;
};

export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
    customRequestInit: {
      next: { revalidate: 60 },
    },
  });
  return detailData;
};
