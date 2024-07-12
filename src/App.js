import { SnackbarProvider } from "notistack";
import "./App.css";
import Form from "./Components/Form";
function App() {
  return (
    <SnackbarProvider maxSnack={1}>
      <div className="App">
        <Form />
      </div>
    </SnackbarProvider>
  );
}

export default App;
