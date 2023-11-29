import DefaultLayout from '@/src/layouts/DefaultLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { Button, ConfigProvider, Space } from 'antd';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: '#6400FF',
              borderRadius: 2,

              // Alias Token
            },
          }}
        >
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ConfigProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
