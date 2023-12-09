import { Modal as AntdModal } from "antd";

function Modal({
  isModalOpen,
  handleOk,
  handleCancel,
  footer,
  title,
  children,
  maxWidth = "594px",
  width = "594px",
  extraClasses = "",
}) {
  return (
    <>
      <AntdModal
        width={width}
        className={`max-w-${maxWidth} antdModal ${width} ${extraClasses}`}
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footer ? true : null}
      >
        {children}
      </AntdModal>
    </>
  );
}

export default Modal;
