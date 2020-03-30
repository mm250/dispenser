import React from 'react';
import {PropTypes} from "prop-types";

import './Toast.css';

function Toast({ type, message }) {
  return (
    <div className={ type === 'error' ? 'toast toast-error' : 'toast'}>
      { message }
    </div>
  );
}

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Toast;