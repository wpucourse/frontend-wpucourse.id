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
  defaultVoucher: {
    code: string;
    discount: number;
  };
  originalPrice: number;
  isTeaser: boolean;
}

export type { ICourse, ICourseResponse };
