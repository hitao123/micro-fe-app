import React from 'react';
import ReactDOM from 'react-dom/client';

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
  const root = ReactDOM.createRoot(document.getElementById('subapp-container'));

  root.render(<Render loading={loading} />);
}


