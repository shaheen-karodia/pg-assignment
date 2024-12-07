import Typography from "./components/typography";

function App() {
  return (
    <main className="bg-very-dark-grey min-h-screen">
      <div>
        <Typography element="h1" treatment="heading-m" className="text-grey ">
          Password Generator
        </Typography>
        P4$5W0rD! Character Length Include Uppercase Letters Include Lowercase
        Letters Include Numbers Include Symbols Strength Generate
      </div>
      <div className="w-7 h-5 bg-1-red" />
      <div className="w-7 h-5 bg-2-orange" />
      <div className="w-7 h-5 bg-3-yellow" />
      <div className="w-7 h-5 bg-neon-green" />
      <div className="w-7 h-5 bg-almost-white" />
      <div className="w-7 h-5 bg-grey" />
      <div className="w-7 h-5 bg-dark-grey" />
      <div className="w-7 h-5 bg-very-dark-grey" />
    </main>
  );
}

export default App;
