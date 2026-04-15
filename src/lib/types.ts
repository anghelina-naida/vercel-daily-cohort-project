export type Author = {
  avatar: string;
  name: string;
};

export type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type HeadingBlock = {
  type: "heading";
  level: 2 | 3;
  text: string;
};

export type BlockquoteBlock = {
  type: "blockquote";
  text: string;
};

export type UnorderedListBlock = {
  type: "unordered-list";
  items: string[];
};

export type OrderedListBlock = {
  type: "ordered-list";
  items: string[];
};

export type ImageBlock = {
  type: "image";
  alt: string;
  caption?: string;
  src: string;
};

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | BlockquoteBlock
  | UnorderedListBlock
  | OrderedListBlock
  | ImageBlock;

export type Article = {
  author: Author;
  category: string;
  content: ContentBlock[];
  excerpt: string;
  featured: boolean;
  id: string;
  image: string;
  publishedAt: string;
  slug: string;
  tags: string[];
  title: string;
};

export type BreakingNews = {
  articleId: string;
  category: string;
  headline: string;
  id: string;
  publishedAt: string;
  summary: string;
  urgent: boolean;
};

export type Category = {
  articleCount: number;
  name: string;
  slug: string;
};

export type Pagination = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};

export type Subscription = {
  createdAt: string;
  status: "active" | "inactive";
  subscribedAt: string | null;
  token: string;
  updatedAt: string;
};

export type ApiError = {
  code: string;
  message: string;
};

export type ApiEnvelope<T> = {
  data: T;
  error?: ApiError;
  meta?: {
    pagination?: Pagination;
  };
  success: boolean;
};

export type SearchArticlesInput = {
  category?: string;
  limit?: number;
  page?: number;
  query?: string;
};
