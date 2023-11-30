export interface ModalInnerType {
  key: number | string;
  label: string;
  children: any;
}

export type ModalType = {
  isOpen: boolean;
  innerData?: ModalInnerType[];
};

export type DescriptionsProps = {
  key: string;
  label: string;
  span?: any;
};
