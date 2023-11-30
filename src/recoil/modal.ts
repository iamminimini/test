import { atom } from 'recoil';
import { ModalType, ModalInnerType } from 'src/types/modal';

const initModal = {
  isOpen: false,
  innerData: [],
};

const modalAtom = atom<ModalType>({
  key: 'modal',
  default: initModal,
});

export { initModal, modalAtom };
