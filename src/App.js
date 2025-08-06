import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  const handleButtonClick = () => {
    console.log("Button clicked from App component!");
  };

  const handleFormSubmit = (data) => {
    console.log("Form submitted from App component!");
    console.log("Form data:", data);
  };

  const MyForm = MyComponent({ formName: "Login form", submitBtnTitle: "Login" });

  console.log('5')
  console.log('6')
  return (
    <div>
      <MyForm
        onButtonClick={handleButtonClick}
        onFormSubmit={handleFormSubmit}
        id={55}
      />
    </div>
  );
}

export default App;
