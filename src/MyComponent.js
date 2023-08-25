import React from 'react';

export function providerWrapper(opts, Component) {
  return (props) => (
    <div>
      {console.log('AAAAAAA opts ', opts)}
      {console.log('AAAAAAA props ', props)}
      {console.log('AAAAAAA Component ', Component)}
      <h1>1:  {opts.getID(props)}</h1>
      <h1>2: {opts.compName}</h1>
      <Component {...props} />
    </div>
  )
}

function MyComponent({ formName, submitBtnTitle }) {

  return providerWrapper({
    getID: ({ id }) => id,
    compName: 'Test comp name',
  }, ({ onButtonClick, onFormSubmit, children, id }) => {
    const handleButtonClick = () => {
      console.log('Button clicked!');
      onButtonClick();
    };

    const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted!');
      onFormSubmit(event.target.elements);
    };

    return (
      <div>
        {children}
        <h1>{formName}</h1>
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <button onClick={handleButtonClick}>
            {submitBtnTitle}
          </button>
        </form>
      </div>
    );
  });
}

export default MyComponent;