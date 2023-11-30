import React from 'react';
import styled from 'styled-components';
import { Button, Col, Row, Slider, Typography, Image, Spin } from 'antd';
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import useBeerList from '@/src/hooks/useBeerList';

function Home() {
  const {
    isLoading,
    beerList,
    hasNextPage,
    fetchNextPage,
    onChangeSlider,
    onResetSlider,
  } = useBeerList();

  return (
    <Container>
      <Row gutter={16} align="middle" style={{ marginBottom: 60 }}>
        <Col span={2}>
          <TitleText>도수 검색</TitleText>
        </Col>
        <Col span={20}>
          <Slider
            range={{ draggableTrack: true }}
            defaultValue={[0, 15]}
            max={15}
            onAfterChange={onChangeSlider}
          />
        </Col>
      </Row>
      <BeerListContainer>
        {beerList?.map((item: any, i: number) => (
          <React.Fragment key={i}>
            {item?.result?.map((row: any) => (
              <BeerContent justify="start" key={row.id} align="middle">
                <Col span={2}>{row.id}</Col>
                <Col span={2}>
                  {row.image_url && (
                    <StyleImage
                      src={`${row.image_url}`}
                      width={100}
                      height={100}
                    />
                  )}
                </Col>
                <Col span={14}>
                  <Col>
                    <CardTitleText>{row.name}</CardTitleText>
                  </Col>
                  <Col>{row.tagline}</Col>
                </Col>
                <Col span={4}>{row.abv}%</Col>
                <Col span={2}>
                  {row.wishList ? (
                    <DeleteOutlined style={{ width: 20, color: '#333' }} />
                  ) : (
                    <ShoppingCartOutlined
                      style={{ fontSize: 20, color: '#6400FF' }}
                    />
                  )}
                </Col>
              </BeerContent>
            ))}
          </React.Fragment>
        ))}
        <StyleButton disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          더보기
          {isLoading && (
            <Spin
              indicator={
                <LoadingOutlined
                  style={{ fontSize: 12, marginLeft: 5, fontWeight: 700 }}
                  spin
                />
              }
            />
          )}
        </StyleButton>
      </BeerListContainer>
    </Container>
  );
}

const Container = styled.div({
  padding: 30,
  minHeight: '100vh',
  background: '#fff',
});

const TitleText = styled(Typography)({
  ['&&']: {
    fontSize: 15,
    fontWeight: 500,
    textAlign: 'center',
  },
});

const CardTitleText = styled(Typography)({
  ['&&']: {
    fontSize: 18,
    fontWeight: 500,
  },
});

const BeerListContainer = styled(Col)({});

const BeerContent = styled(Row)({
  border: '1px solid #eee',
  marginBottom: 8,
  borderRadius: '5px',
  padding: '2rem 1rem',
});

const StyleImage = styled(Image)({
  ['&&']: {
    objectFit: 'contain',
  },
});

const StyleButton = styled(Button)({
  ['&&']: {
    height: 70,
    width: '100%',
    background: '#cfb1ff',
    color: '#fff',
    fontWeight: 700,
    fontSize: 20,
  },
});

export default Home;
