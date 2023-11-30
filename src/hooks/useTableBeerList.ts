import { useEffect, useState } from 'react';
import useWishList from './useWishList';
import { useQuery } from 'react-query';
import { getBeerList } from '@/src/api/profile';
import { FilterParamType } from '@/src/types/types';
import useModal from './useModal';

type ReturnType = {
  isLoading: boolean;
  beerList: any;
  fetchList: () => void;
  onChangeSlider: (value: number[]) => void;
  onResetSlider: () => void;
};

const useTableBeerList = (): ReturnType => {
  const { wishList } = useWishList();
  const [filter, setFilter] = useState<FilterParamType>({
    page: 1,
    per_page: 10,
  });

  const fetchList = () => {
    const page = filter?.page ? filter.page + 1 : 1;
    setFilter({
      ...filter,
      page: page,
    });
  };

  const onChangeSlider = (value: number[]) => {
    setFilter({
      ...filter,
      abv_gt: value[0],
      abv_lt: value[1],
    });
  };

  const onResetSlider = () => {
    setFilter({
      ...filter,
      abv_gt: 0,
      abv_lt: 15,
    });
  };

  useEffect(() => {
    refetch();
  }, [filter]);

  const {
    isLoading,
    data: beerList,
    refetch,
  } = useQuery(['beerTableList', filter], () => getBeerList(filter), {
    select: (data) => {
      return data?.map((item: any) => ({
        ...item,
        wishList: wishList.data?.find((e: any) => e.id == item.id),
      }));
    },
  });

  return { isLoading, beerList, fetchList, onChangeSlider, onResetSlider };
};

export default useTableBeerList;
