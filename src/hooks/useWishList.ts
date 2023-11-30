import { useRecoilState } from 'recoil';
import { wishListAtom } from '@/src/recoil/wishList';
import { WishListDetailType, WishListType } from '@/src/types/wishList';

type ReturnType = {
  wishList: WishListType;
  onClickAddWishList: (item: WishListDetailType) => void;
  onClickDeleteWishList: (id: number) => void;
};

const useWishList = (): ReturnType => {
  const [wishList, setWishList] = useRecoilState(wishListAtom);

  const onClickAddWishList = (item: WishListDetailType) => {
    const newData: any = {
      id: item.id,
      name: item.name,
      image_url: item.image_url,
      abv: item.abv,
      tagline: item.tagline,
      first_brewed: item.first_brewed,
      wishList: true,
    };
    setWishList((prevValue: any) => ({ data: [...prevValue.data, newData] }));
  };

  const onClickDeleteWishList = (id: number) => {
    setWishList((prevValue: any) => ({
      data: prevValue.data.filter((item: any) => item.id !== id),
    }));
  };

  return { wishList, onClickAddWishList, onClickDeleteWishList };
};

export default useWishList;
