import React from 'react';
import './Error404.scss';

function Error404(props) {
  const { errorCode, errorMessage, errorRedirect } = props;
  return (
    <div className="error">
      <h1 className="number">{errorCode}</h1>
      <h2> {errorMessage}</h2>
      <a href="/kasa" className="return">
        {errorRedirect}
      </a>
    </div>
  );
}

export default Error404;
