import { useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { FilterParamType } from '@/src/types/types';
import { fetchBeers } from '@/src/api/profile';

type ReturnType = {
  isLoading: boolean;
  beerList: any;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
  onChangeSlider: (value: number[]) => void;
  onResetSlider: () => void;
};

const useBeerList = (): ReturnType => {
  const [filter, setFilter] = useState<FilterParamType>({
    page: 1,
    per_page: 10,
  });

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

  const {
    data: beerList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['beerList', filter],
    async ({ pageParam = 1 }) => {
      return await fetchBeers(pageParam as number, filter);
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      getPreviousPageParam: (firstPage) => firstPage.prevCursor,
    },
  );

  useEffect(() => {
    fetchNextPage();
  }, [filter]);

  return {
    isLoading: isFetchingNextPage,
    beerList: beerList?.pages || [],
    hasNextPage,
    fetchNextPage,
    onChangeSlider,
    onResetSlider,
  };
};

export default useBeerList;

// const { isEnd } = useInfiniteScroll({ onScrollEnd: fetchList });
// const {
//   data: beerList,
//   status,
//   hasNextPage,
//   fetchNextPage,
//   isFetchingNextPage,
//   isFetching,
// } = useInfiniteQuery(['beers', params], () => getBeerList(params), {
//   getNextPageParam: (currentPage: any) => {
//     const nextPage = currentPage.page + 1;
//     return nextPage > currentPage.total_pages ? null : nextPage;
//   },
// });

// useEffect(() => {
//   console.log('hasNextPage', hasNextPage);
//   // hasNextPage 다음 페이지가 있는지 여부, Boolean (getNextPageParam 리턴값에 의해서)
//   if (inView && hasNextPage) {
//     fetchList();
//     // fetchNextPage fetch callback 함수를 실행
//     fetchNextPage();
//   }
// }, [inView]);
