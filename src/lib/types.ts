export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "blockquote"; text: string }
  | { type: "unordered-list"; items: string[] }
  | { type: "ordered-list"; items: string[] }
  | { type: "image"; alt: string; caption?: string; src: string };

export type Article = {
  author: {
    avatar: string;
    name: string;
  };
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

export type ApiEnvelope<T> = {
  data: T;
  error?: {
    code: string;
    message: string;
  };
  meta?: {
    pagination?: Pagination;
  };
  success: boolean;
};

export type ArticleList = {
  articles: Article[];
  pagination?: Pagination;
};

export type SearchArticlesInput = {
  category?: string;
  limit?: number;
  page?: number;
  query?: string;
};
