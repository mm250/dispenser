import React from 'react';

import './Toast.css';

function Toast({ type, message }) {
  return (
    <div className={ type === 'error' ? 'toast toast-error' : 'toast'}>
      { message }
    </div>
  );
}

export default Toast;