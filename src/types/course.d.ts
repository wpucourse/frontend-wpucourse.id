interface ICourse {
  cover: string;
  title: string;
  slug: string;
  price: number;
  website: string;
  description: string;
  voucher: string;
  discount: number;
}

interface ICourseResponse {
  cover: string;
  title: string;
  slug: string;
  price: number;
  website: string;
  description: string;
  voucher: {
    code: string;
    discount: number;
  };
}

export type { ICourse, ICourseResponse };
