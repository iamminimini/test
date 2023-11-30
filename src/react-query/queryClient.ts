import { QueryClient } from 'react-query';
// import handleErrorAlert from '@util/handleErrorAlert';

let errorCode = 0;

function generateQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 0,
      },
    },
  });
}

const queryClient = generateQueryClient();

export { generateQueryClient, queryClient };
