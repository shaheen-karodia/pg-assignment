import Button from "./components/Button";
import Container from "./components/Container";
import PasswordField from "./components/PasswordField";
import PasswordLengthSlider from "./components/PasswordLengthSlider";
import PasswordStrengthIndicator from "./components/PasswordStrengthIndicator";
import Typography from "./components/Typography";

function App() {
  return (
    <main className="bg-very-dark-grey min-h-screen">
      <Container className="max-w-[540px] text-center">
        <Typography element="h1" treatment="heading-m" className="text-grey">
          Password Generator
        </Typography>
        <PasswordField password="P4$5W0rD!" />
        <div className="bg-dark-grey p-8">
          <PasswordLengthSlider />
          Character Length Include Uppercase Letters Include Lowercase Letters
          Include Numbers Include Symbols Strength
          <PasswordStrengthIndicator strength="strong" className="mb-8" />
          <Button
            onClick={() => {
              console.log("TODO");
            }}
            label="Generate"
          />
        </div>
      </Container>
    </main>
  );
}

export default App;
