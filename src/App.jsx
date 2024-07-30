import { ThemeProvider } from "./ThemeContext";
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
