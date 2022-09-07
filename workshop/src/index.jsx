import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

// const Hello = (props) => {
//   console.log(props);
//   const { name, job } = props;
//   // const name = props.name; const name = props.job;
//   return <h1> Hello My name is { name } and I am a { job } !!! </h1>;
// };


class Hello extends React.Component {
  render() {
    const { name, job } = this.props;
    return (
    <h1>
      Hello My name is { name } and I am a { job } !!!
    </h1>
    )
  }
}


const rootContainer = document.querySelector("#root");
if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer);
  root.render(<App />);
}
