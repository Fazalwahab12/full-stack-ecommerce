




export interface Asset {
  _ref: string;
  _type: string;
}

export interface Slugtype {
  current: string;
  _type: string;
}

export interface ImageType {
  asset: Asset;
  _type: string;
  _key: string;
}

export interface oneProductType {
  [x: string]: any;
  _createdAt: string;
  _id: string;
  slug: Slugtype;
  productDetails: string;
  price: number;
  _type: string;
  productCare: string;
  tags: string;
  name: string;
  category: string;
  _updatedAt: string;
  image: ImageType[];
  _rev: string;
  totalAmount: number;
  totalQuantity: number;
  totalPrice: number;
  quantity: number;
 
}

export interface responseType {
  result: oneProductType[];
}
