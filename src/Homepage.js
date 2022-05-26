import TopBar from "./components/TopBar";
import LoginFields from "./components/LoginFields";
import AdditionalButtons from "./components/AdditionalButtons";
import logo from "./images/nudles-logo.PNG";

const Homepage = () => {
  return (
    <>
      <TopBar />

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <LoginFields />

          <br></br>

          <AdditionalButtons />
        </header>
      </div>
    </>
  );
};
export default Homepage;
