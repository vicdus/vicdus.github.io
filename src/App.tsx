import React from 'react';
import './App';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import raw from "raw.macro";
import Example2 from './examples/Example2';
import Example3 from './examples/Example3';
import Example4 from './examples/Example4';
import Example5 from './examples/Example5';
import Example6 from './examples/Example6';


function App() {
  return (
    <>
      <ReactDiffViewer leftTitle={"Nones"} rightTitle={"Example1"} oldValue={""} newValue={raw("./examples/Example1.tsx")} splitView={true} compareMethod={DiffMethod.LINES} />
      <h1>Foo Bar</h1>
      <ReactDiffViewer leftTitle={"Example1"} rightTitle={"Example2"} oldValue={raw("./examples/Example1.tsx").replaceAll("Example1", "App")} newValue={raw("./examples/Example2.tsx").replaceAll("Example2", "App")} splitView={true} compareMethod={DiffMethod.LINES} />
      <Example2 />
      <ReactDiffViewer leftTitle={"Example2"} rightTitle={"Example3"} oldValue={raw("./examples/Example2.tsx").replaceAll("Example2", "App")} newValue={raw("./examples/Example3.tsx").replaceAll("Example3", "App")} splitView={true} compareMethod={DiffMethod.LINES} />
      <Example3 />
      <ReactDiffViewer leftTitle={"Example3"} rightTitle={"Example4"} oldValue={raw("./examples/Example3.tsx").replaceAll("Example3", "App")} newValue={raw("./examples/Example4.tsx").replaceAll("Example4", "App")} splitView={true} compareMethod={DiffMethod.LINES} />
      <Example4 />
      <ReactDiffViewer leftTitle={"Example4"} rightTitle={"Example5"} oldValue={raw("./examples/Example4.tsx").replaceAll("Example4", "App")} newValue={raw("./examples/Example5.tsx").replaceAll("Example5", "App")} splitView={true} compareMethod={DiffMethod.LINES} />
      <Example5 />
      <ReactDiffViewer leftTitle={"Example5"} rightTitle={"Example6"} oldValue={raw("./examples/Example5.tsx").replaceAll("Example5", "App")} newValue={raw("./examples/Example6.tsx").replaceAll("Example6", "App")} splitView={true} compareMethod={DiffMethod.LINES} />
      <Example6 />
    </>
  );
}

export default App;
