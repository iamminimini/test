import {
  HomeOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Layout as AntdLayout, Menu } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useRouter } from 'next/router';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { PropsWithChildren, useCallback } from 'react';
import styled from 'styled-components';

export default function DefaultLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = router.pathname;
  const onRoute: MenuClickEventHandler = useCallback(
    ({ key }) => {
      router.push(`/${key}`);
    },
    [router],
  );

  return (
    <StyledLayout>
      <StyledMenu
        defaultSelectedKeys={[pathname.replace('/', '')]}
        items={[
          {
            key: 'home',
            label: 'HOME',
            onClick: onRoute,
            icon: <HomeOutlined />,
          },
          {
            key: 'list',
            label: '목록',
            onClick: onRoute,
            icon: <UnorderedListOutlined />,
          },
          {
            key: 'wishlist',
            label: '위시리스트',
            icon: <ShoppingCartOutlined />,
            onClick: onRoute,
          },
        ]}
      />
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  );
}

const StyledLayout = styled(AntdLayout)({
  ['&&']: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
});

const StyledContent = styled(Content)({
  width: 'calc(100% - 200px)',
  marginLeft: 200,
  minHeight: '100vh',
  background: '#fff',
  position: 'absolute',
  top: 0,
  bottom: 0,
  '@media (max-width: 1200px)': {
    width: 2000,
  },
});

const StyledMenu = styled(Menu)({
  position: 'fixed',
  width: 200,
  height: '100%',
  letterSpacing: -0.5,
  '&&.ant-menu-light .ant-menu-item-selected': {
    background: '#f1edf7',
    color: '#6400FF',
    fontWeight: 500,
  },
});
