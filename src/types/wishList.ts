export interface WishListDetailType {
  id?: number;
  name?: string;
  image_url?: string;
  abv?: number;
  tagline?: string;
  first_brewed?: string;
}

export type WishListType = {
  data?: WishListDetailType[];
};
