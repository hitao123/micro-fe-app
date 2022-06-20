import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Render(props) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="root">Loading...</h4>}
      <div id="sub-app" />
    </>
  );
}

export default function render({ loading }) {
  const container = document.getElementById('subapp-container');
  ReactDOM.render(<Render loading={loading} />, container);
}


