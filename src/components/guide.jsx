const StepGuide = () => {
  return (
    <div className="step--container">
        <h2 className="header">Step-by-Step Guide</h2>
    <div className="step-guide">
      <div className="step">
        <h2>Step 1: Select React Tools</h2>
        <p>Choose between Vite and Create React App for your project.</p>
      </div>
      <div className="step">
        <h2>Step 2: Choose a Language</h2>
        <p>Select either TypeScript or JavaScript as your language.</p>
      </div>
      <div className="step">
        <h2>Step 3: Pick a UI Library</h2>
        <p>
          Opt for one of the options: Build it on your own (Scratch), Material
          UI, or Ant Design.
        </p>
      </div>
      <div className="step">
        <h2>Step 4: Generate and Download</h2>
        <p>
          Click the Generate button to customize your starter pack based on
          the chosen options. Your download will begin automatically.
        </p>
      </div>
    </div>
    </div>
  );
};

export default StepGuide;
