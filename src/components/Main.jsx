import "./Main.css"

export default function Main(){
    return (
        <main class="Main">
        {/* LeftPanel */}
        <div class="LeftPanel">
            <p>Liens externes :</p>
  
            {/* College */}
            <div class="Bases">
                <p>Les Bases : </p>
                <div class="Français">
                    <p>Les bases du Français :</p>
                    <p><a href="https://www.pass-education.fr/francais-6eme/">Les bases du Français</a></p>
                </div>
                <div class="Anglais">
                    <p>Les bases de l'Anglais :</p>
                    <p><a href="https://www.pass-education.fr/anglais-6eme-jeux-educatifs-jpd/">Les bases de l'Anglais</a></p>
                </div>
                <div class="Maths">
                    <p>Les bases des Maths :</p>
                    <p><a href="https://www.pass-education.fr/mathematiques-6eme-jeux-educatifs-jpd/">Les bases des Maths</a></p>
                </div>
            </div>
            {/* College */}
  
            {/* References */}
            <div class="References">
                <p>Les sites de référence :</p>
                <div class="Cpp">
                    <p>C++ :</p>
                    <p><a href="https://en.cppreference.com/w/">CppReference.com</a></p>
                </div>
                <div class="Python">
                    <p>Python :</p>
                    <p><a href="https://docs.python.org/3/">Python.org</a></p>
                </div>
                <div class="Qt">
                    <p>Qt :</p>
                    <p><a href="https://doc.qt.io/qt-6/gettingstarted.html">Doc.qt.io</a></p>
                </div>
                <div class="Global">
                    <p>Globale :</p>
                    <p><a href="https://stackoverflow.com/">StackOverflow.com</a></p>
                    <p><a href="https://www.w3schools.com/">W3School.com</a></p>
                    <p><a href="https://developer.mozilla.org/fr/">MDN.com</a></p>
                </div>
            </div>
            {/* Reference */}
  
        </div>
        {/* /LeftPanel */}
        
        {/* CenterPanel */}
        <div class="CenterPanel">
            <h1>Ce site est en developpement.</h1>
            <h2>Bonjour à tous, ce site sera destiné à la centralisation 
                de l'ensemble des cours <br />du début collége jusqu'a BAC+X de tous cursus</h2>
            <p>Liens internes</p>
        </div>
        {/* /CenterPanel */}
        
        {/* RightPanel */}
        <div class="RightPanel">
            <div class="Notes">
                <p>Notes</p>
            </div>
            <div class="ToDoList">
                <p>ToDoList</p>
            </div>
            <div class="Gift">
                <p>Tu m'offre un café ?</p>
            </div>
        </div>
        {/* /RightPanel */}
        
    </main>
    )
}