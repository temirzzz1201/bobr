export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface HomePageData {
  data: {
    id: number;
    documentId: string;
    description: string;
    main: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}
