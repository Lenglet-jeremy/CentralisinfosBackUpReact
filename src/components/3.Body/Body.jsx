import "./Body.css";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

export default function Body() {
  const theme = useContext(ThemeContext);
  const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

  return (
    <div className={`${bodyTheme} Body`}>
      <h1>CE SITE EST EN PLEIN DEVELOPPEMENT ! </h1>
      <h2>Centralisinfos : Pour l'Unificatiuon de la Culture et de la Connaissance</h2>
      <p>Bonjour à tous ce site sera dédié à la centralisation des cours du début collége jusqu'a BAC + X de tous Cursus</p>

    </div>
  );
}