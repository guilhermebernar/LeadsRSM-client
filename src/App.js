
import RoutesMain from "./routes/index";
import Global from "./style/Global";
import './App.css'
// import ContextsProvider from "./providers/";
//  import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
{/* 
      <ToastContainer/> */}
      {/* <ContextsProvider> */}
        <Global/>
        <RoutesMain/>
      {/* </ContextsProvider> */}
    </div>
  );
}

export default App;
