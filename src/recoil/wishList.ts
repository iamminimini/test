import { atom } from 'recoil';
import { WishListType } from 'src/types/wishList';

const initWishList = {
  data: [],
};

const wishListAtom = atom<WishListType>({
  key: 'wishList',
  default: initWishList,
});

export { initWishList, wishListAtom };
