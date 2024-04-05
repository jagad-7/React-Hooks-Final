import './App.css';
import ExamUseMemoOne from './UseMemo/ExamUseMemoOne';
import ExamUseRefOne from './UseRef/ExamUseRefOne';
import ExamUseRefTwo from './UseRef/ExamUseRefTwo';
import UseReducerExmOne from './useReducer/UseReducerExamOne';
import UseReducerExamThree from './useReducer/UseReducerExamThree';
import UseReducerExmTwo from './useReducer/UseReducerExmTwo';

function App() {
  return (
    <div className="App">
      <UseReducerExmOne />
      <UseReducerExmTwo />
      <UseReducerExamThree />
      <ExamUseRefOne />
      <ExamUseRefTwo />
      <ExamUseMemoOne />

    </div>
  );
}

export default App;
