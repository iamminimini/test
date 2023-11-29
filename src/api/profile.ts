import { commonApi } from '.';

const getBeerList = async (payload: any) => {
  console.log('payload', payload);
  const response = await commonApi({
    method: 'GET',
    url: `/beers`,
    params: { ...payload },
  });
  return response.data;
};

const fetchBeers = async (page: number, payload: any) => {
  console.log('payload', page);
  const response = await commonApi({
    method: 'GET',
    url: `/beers?page=${page}`,
    params: { ...payload },
  });

  return {
    result: response.data,
    nextPage: page + 1,
  };

  return response.data;
};

// const fetchData = async ({ pageParam = 0 }) => {
//   return await fetch(`.../?page=${pageParam}`).then((res) => res.json()); //Should be of type Page
// };

export { getBeerList, fetchBeers };
