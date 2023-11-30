import styled from 'styled-components';
import { Button, Col, Row, Slider, Typography } from 'antd';

import useTableBeerList from '@/src/hooks/useTableBeerList';

import Table from '@/src/components/table';
import Modal from '@/src/components/modal';

function List() {
  const { isLoading, beerList, fetchList, onChangeSlider, onResetSlider } =
    useTableBeerList();
  return (
    <Container>
      <Modal />
      <Row gutter={16} align="middle" style={{ marginBottom: 60 }}>
        <Col span={2}>
          <TitleText>도수 검색</TitleText>
        </Col>
        <Col span={20}>
          <Slider
            range={{ draggableTrack: true }}
            defaultValue={[0, 15]}
            max={15}
            // tooltip={{ open: true }}
            onAfterChange={onChangeSlider}
          />
        </Col>
        <Col span={2}>
          <Button onClick={onResetSlider}>초기화</Button>
        </Col>
      </Row>
      <Table loading={isLoading} data={beerList} />
      <Button onClick={fetchList}>다음</Button>
    </Container>
  );
}

const Container = styled.div({
  padding: 30,
});

const TitleText = styled(Typography)({
  ['&&']: {
    fontSize: 15,
    fontWeight: 500,
    textAlign: 'center',
  },
});

export default List;
