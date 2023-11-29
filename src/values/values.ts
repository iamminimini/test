import { ColumnType } from 'antd/lib/table';
import { DescriptionsProps } from '@/src/types/modal';

export const columns: ColumnType<any>[] = [
  {
    title: 'No.',
    dataIndex: 'id',
    align: 'center',
  },
  {
    title: '사진',
    dataIndex: 'image_url',
    align: 'center',
  },
  {
    title: 'name',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '도수',
    dataIndex: 'abv',
    align: 'center',
  },
  {
    title: 'tagline',
    dataIndex: 'tagline',
    align: 'center',
  },
  {
    title: 'wishList',
    dataIndex: 'wishList',
    align: 'center',
  },
];

export const modalDescription: DescriptionsProps[] = [
  {
    key: '1',
    label: 'id',
    span: 2,
  },
  {
    key: '2',
    label: 'name',
    span: 2,
  },
  {
    key: '3',
    label: 'abv',
    span: 2,
  },
  {
    key: '4',
    label: 'first_brewed',
    span: 2,
  },
  {
    key: '5',
    label: 'image_url',
    span: 4,
  },
];
