import React from 'react';
import { Modal as AntdModal, Descriptions } from 'antd';
import useModal from '@/src/hooks/useModal';

function Modal() {
  const { modalData, onClickCloseModal } = useModal();

  const handleIsShow = () => {
    document.body.style.overflow = 'auto';
  };

  const onClosedModal = () => {
    onClickCloseModal({
      isOpen: false,
      innerData: [],
    });
  };

  return (
    <>
      <AntdModal
        open={modalData.isOpen}
        onOk={handleIsShow}
        onCancel={onClosedModal}
        width={900}
      >
        <Descriptions
          bordered
          // extra={<Button type="primary">Edit</Button>}
          items={modalData.innerData}
        />
      </AntdModal>
    </>
  );
}

export default Modal;
