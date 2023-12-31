import React from 'react'

const Modal = (props) => {
  const {closeHandler} = props;
 
  return (
   <>
   <div className="TWC_modal_overlay" onClick={()=>closeHandler()}>
   </div>
   <div className="TWC_modal">
   <div className="TWC_modal_box">
    <div className="TWC_modal_titlebar">
      <button className="TWC_modal_close_button" onClick={()=>closeHandler()}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="clsbtnsvg"><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
      </button>
    </div>
    <div className="TWC_modal_body">
      {props.children}
    </div>
   </div>
   </div>
   </>
  )
}

export default Modal