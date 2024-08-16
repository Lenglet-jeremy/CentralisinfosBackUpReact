import { ThemeProvider } from "./ThemeContext";
import { ContentProvider } from "./ContentContext";  // Import du ContentProvider
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ContentProvider>  {/* Enveloppez votre application avec ContentProvider */}
        <div>
          <Outlet />
        </div>
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;
