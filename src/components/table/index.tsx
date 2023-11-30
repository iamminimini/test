import { ElementType, memo, useMemo } from 'react';

import useWishList from '@/src/hooks/useWishList';
import { values } from '@/src/values';

import { Image, Table as AntdTable, Typography } from 'antd';
import styled from 'styled-components';
import { ShoppingCartOutlined, DeleteOutlined } from '@ant-design/icons';

export interface TableComponentProps<DataType> {
  loading?: boolean;
  data: any;
}

function TableComponent<DataType>({
  loading,
  data,
}: TableComponentProps<DataType>) {
  const { onClickAddWishList, onClickDeleteWishList } = useWishList();

  const columns = useMemo(() => {
    return values.columns.map((column: any) => {
      const dataIndex = column.dataIndex as string;

      if (dataIndex === 'image_url') {
        return {
          ...column,
          render: (t: any, r: any) => (
            <StyleImage width={50} height={50} src={`${r.image_url}`} />
          ),
        };
      }

      if (dataIndex === 'name') {
        return {
          ...column,
          render(value: number, row: any) {
            return value ? (
              <LinkUnderLine onClick={() => onClickShowModal(row)}>
                {value}
              </LinkUnderLine>
            ) : (
              '-'
            );
          },
        };
      }

      if (dataIndex === 'wishList') {
        return {
          ...column,
          render(value: string, row: any) {
            return value ? (
              <DeleteOutlined
                style={{ width: 20, color: '#333' }}
                onClick={() => onClickDeleteWishList(row.id)}
              />
            ) : (
              <ShoppingCartOutlined
                style={{ fontSize: 20, color: '#6400FF' }}
                onClick={() => onClickAddWishList(row)}
              />
            );
          },
        };
      }

      return {
        ...column,
        render(value: any) {
          return value ?? '-';
        },
      };
    });
  }, []);

  const onClickShowModal = (row: any) => {
    const newData = values.modalDescription.map((item) => {
      return {
        ...item,
        children:
          item.label === 'image_url' ? (
            <StyleImage src={`${row.image_url}`} width={200} height={200} />
          ) : (
            row[item.label]
          ),
      };
    });

    onClickShowModal({
      isOpen: true,
      innerData: newData,
    });
  };

  return (
    <>
      <StyledTable
        loading={loading}
        bordered
        size="small"
        columns={columns}
        rowKey={(item: any) => item?.id}
        dataSource={data}
        pagination={{
          pageSize: 10,
          position: ['none'],
        }}
      />
    </>
  );
}

const StyledTable = styled<ElementType>(AntdTable)({
  ['.ant-table-tbody .ant-table-cell:not(.ant-table-selection-column)']: {
    cursor: 'pointer',
  },
});

const LinkUnderLine = styled(Typography)({
  fontSize: 14,
  textDecoration: 'underline',
  textUnderlinePosition: 'under',
});

const StyleImage = styled(Image)({
  ['&&']: {
    objectFit: 'contain',
  },
});

const Table = memo(TableComponent);

export default Table;
