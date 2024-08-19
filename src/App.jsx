import { ThemeProvider } from "./ThemeContext";
import { ContentProvider } from "./ContentContext"; // Import du ContentProvider
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ContentProvider> {/* Enveloppez votre application avec ContentProvider */}
        <div className="AppContainer"> {/* Ajout d'une classe pour le conteneur principal */}
          <Outlet /> {/* Ceci rendra le contenu basé sur les routes */}
        </div>
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;
