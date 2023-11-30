import { useRecoilState } from 'recoil';
import { modalAtom } from '@/src/recoil/modal';
import { ModalType } from '@/src/types/modal';

type ReturnType = {
  modalData: ModalType;
  onClickOpenModal: (modalData: ModalType) => void;
  onClickCloseModal: (modalData: ModalType) => void;
};

const useModal = (): ReturnType => {
  const [modalData, setModalData] = useRecoilState(modalAtom);

  const onClickOpenModal = (modalData: ModalType) => {
    setModalData(modalData);
  };

  const onClickCloseModal = () => {
    setModalData({
      isOpen: false,
      innerData: [],
    });
  };

  return { modalData, onClickOpenModal, onClickCloseModal };
};

export default useModal;
