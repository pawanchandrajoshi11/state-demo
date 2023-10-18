import "./App.css";
import UsernameForm from "./components/UsernameForm";
import Counter from "./components/Counter";
import Emojis from "./components/Emojis";
import ScoreKeeper from "./components/ScoreKeeper";
import SignupForm from "./components/SignupForm";
import BetterSignupForm from "./components/betterSignUpForm";

function App() {
  return (
    <>
      {/* <Counter/> */}
      {/* <Emojis/> */}
      {/* <ScoreKeeper numPlayers={5} target={6} /> */}
      {/* <UsernameForm/> */}
      {/* <SignupForm/> */}
      <BetterSignupForm/>
    </>
  );
}

export default App;
