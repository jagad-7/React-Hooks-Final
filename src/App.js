import './App.css';
import ExamOneCust from './CustomHook/CustomHookOne/ExamOneCust';
import ExamTwoCust from './CustomHook/CustomHookOne/ExaxTwoCust';
import ExamCutOne from './CustomHook/CustomHookThree/ExamCutOne';
import ExamCutTwoApi from './CustomHook/CustomHookThree/ExamCutTwoApi';
import ExampleOneCust from './CustomHook/CustomHookTwo/ExampleOneCust';
import ExampleTwoCust from './CustomHook/CustomHookTwo/ExampleTwoCust';
import ParentComp from './UseCallback_&_React.memo/ParentComp';
import ExamUseMemoOne from './UseMemo/ExamUseMemoOne';
import ExamUseRefOne from './UseRef/ExamUseRefOne';
import ExamUseRefTwo from './UseRef/ExamUseRefTwo';
import UseReducerExmOne from './useReducer/UseReducerExamOne';
import UseReducerExamThree from './useReducer/UseReducerExamThree';

function App() {
  return (
    <div className="App">
      <UseReducerExmOne />
      <UseReducerExamThree />
      <ExamUseRefOne />
      <ExamUseRefTwo />
      <ExamUseMemoOne />
      <ParentComp />
      <ExamOneCust />
      <ExamTwoCust />
      <ExampleOneCust />
      <ExampleTwoCust  />
      <ExamCutOne />
      <ExamCutTwoApi />

    </div>
  );
}

export default App;
