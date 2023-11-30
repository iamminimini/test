import styled from 'styled-components';
import Table from '@/src/components/table';
import useWishList from '@/src/hooks/useWishList';

function Wishlist() {
  const { wishList } = useWishList();

  return (
    <Container>
      <Table data={wishList.data} />
    </Container>
  );
}

const Container = styled.div((props) => ({
  padding: '20px 20px',
  background: '#fff',
  height: '100vh',
}));

export default Wishlist;
