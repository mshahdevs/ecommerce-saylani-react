import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const DialogMessage = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className='p-3 rounded-xl   shadow-md  ' id='modal'>
      {children}
      <form method='dialog' className=''>
        <button className='px-2 py-1 absolute top-1 right-2  text-stone-200 rounded-xl'>
          <IoIosCloseCircleOutline size={23} color='gray' />
        </button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default DialogMessage;
