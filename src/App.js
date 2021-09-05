/*

Template réalisée avec ReactJS & Bootstrap permettant de créer une macro skill en donnant un nom et en y ajoutant différents skills par Drag & Drop

Navigation :
- Menu principal orienté verticalement avec différents onglets
- Barre de recherche situé en haut de l'interface

- Onglet Macro-skills : Affichage des éléments sur la partie centrale de l'interface

TODO :
Finaliser l'implémentation du Drag & Drop après avoir cliqué sur le bouton Next dans l'onglet Macro-skills
> A l'aide de ReactDnD :
https://github.com/react-dnd/react-dnd

*/


import logo from './logo.svg';
import './App.css';


//Imports bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/collapse'
import 'bootstrap/dist/css/bootstrap.min.css';

//Imports Drag & Drop (ReactDnD)
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


//Codage couleurs
var GRIS_CLAIR = '#e6e6e6';
var ROUGE = 'red';
var NOIR = 'black';
var BLANC = 'white';



function App() {

  return (

    <div className="App">

    {/*Affichage de la barre de recherche*/}
    <div class="barre-horizontale">
      <div class="search-container">
          <input type="text" placeholder="Search.." name="search"/>
      </div>
    </div>




{ /* Affichage du menu vertical */ }
      <div class="barre-verticale bg-white" id="sidebar" >
            <div class="py-4 px-3 mb-4 bg-light">
              <h4 class="m-0" >Template</h4>
            </div>


            {/*Menu déroulant Skills Structuring */}

            <div class = 'Skills-Tabs-Dropdown'>
                <p class="font-weight-bold text-uppercase px-3 small pb-4 mb-0">Skills structuring ></p>
                    <ul class="nav flex-column bg-white mb-0">
                          <div class = 'Tabs-Dropdown-content'>

                            { /*Affichage du premier onglet du menu : Skills */ }
                              <li class="nav-item"  onClick=
                                {() =>
                                  {
                                    //Lorsqu'on clique sur l'onglet "Skills" on fait disparaitre les éléments des autres onglets
                                    document.getElementById("macroSkillPageID").style.display = "none";
                                  }
                                }>

                        <a href="#Skills" class="nav-link" >
                            <i class="fa fa-th-large mr-3 text-primary fa-fw" ></i>
                              Skills
                        </a>
                              </li>

                              { /*Affichage du deuxième onglet du menu : Macro-skills */ }
                              <li class="nav-item"  onClick=
                                {() =>
                                  {
                                    document.getElementById("macroSkillPageID").style.display = "block";
                                  }
                                }>

                                    <a href="#MacroSkillsEtape1" class="nav-link">
                                      <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                                      Macro-skills
                                    </a>
                               </li>
                          </div>
                    </ul>
            </div>



            {/*Menu déroulant Creation of activities */}
            <div class = 'Activities-Tabs-Dropdown'>
                  <p class="font-weight-bold text-uppercase px-3 small pb-4 mb-0">Creation of activities ></p>
                      <ul class="nav flex-column bg-white mb-0">
                          <div class = 'Tabs-Dropdown-content'>
                                  <a href="#">Item 1</a>
                          </div>
                      </ul>
            </div>


            {/*Menu déroulant Broadcasting */}
            <div class = 'Broadcasting-Tabs-Dropdown'>
                <p class="font-weight-bold text-uppercase px-3 small pb-4 mb-0">Broadcasting ></p>
                  <ul class="nav flex-column bg-white mb-0">
                    <div class = 'Tabs-Dropdown-content'>
                        <a href="#">Item 1</a>
                    </div>
                  </ul>
            </div>


            {/*Menu déroulant Monitoring Learners */}
            <div class = 'MonitoringLearners-Tabs-Dropdown'>
                <p class="font-weight-bold text-uppercase px-3 small pb-4 mb-0">MonitoringLearners ></p>
                    <ul class="nav flex-column bg-white mb-0">
                          <div class = 'Tabs-Dropdown-content'>
                                <a href="#">Item 1</a>
                          </div>
                    </ul>
                </div>



      </div> { /* fin div menu vertical */ }




      { /* Les éléments de l'onglet Macro-Skills sous Skills Structuring */ }
<div id = "macroSkillPageID" class = "macroSkillPageClass">
<div class = "zoneAffichageMacroSkills">

  <h3> Macro skills creation </h3>

        {/*Affichage des icônes indiquant les étapes*/}
    <Container>

      <Row>

        {/*Icone etape 1*/}
        <Col  xs={2}><button id = "boutonEtape1ID" type="button" class="btn-sm" style={{backgroundColor : ROUGE}} disabled> <p id = "texteBoutonEtape1ID" class = "tailleTexteBoutons" style={{color : BLANC}}> STEP 1 <br/> Macro skills details </p>  </button></Col>


        {/*Icone etape 2*/}
        <Col><button id = "boutonEtape2ID" type="button" class="btn-sm" style={{backgroundColor : GRIS_CLAIR}} disabled> <p id = "texteBoutonEtape2ID" class = "tailleTexteBoutons" style={{color : NOIR}}> STEP 2 <br/> Skills selection </p>  </button></Col>

      </Row>


      <Row>

        {/*Colonne vide afin d'afficher le champ de texte au même niveau que l'icône de l'étape 2*/}
        <Col  xs={2}></Col>


        <Col>

          <div id = "divNomMacroID" class = "divNomMacroClass">
              <p> Macro-skill goes here </p>

              {/* Affichage du champ de texte pour insertion du nom de la macro et changement de couleur du bouton Next selon le contenu*/}
              <input id ="saisieNomMacroID" type="text" class="macro-skill-text-attributes" placeholder="" aria-label="macro-skill-name" aria-describedby="basic-addon1" onChange=
              {(event) =>
                  {

                      {/* Si champ de texte vide > bouton Next grisé, sinon devient rouge */}
                      if(document.getElementById("saisieNomMacroID").value == "")
                      {
                          document.getElementById("nextButton").style.backgroundColor = GRIS_CLAIR;
                          document.getElementById("nextButton").style.color = NOIR;
                      }
                      else
                      {
                        document.getElementById("nextButton").style.backgroundColor = ROUGE;
                        document.getElementById("nextButton").style.color = BLANC;
                      }
                  }
                }/>

          </div>

        </Col>


      </Row>
    </Container>



        {/*Affichage du bouton Next en bas à droite de la page et passage à l'étape suivante*/ }
        <button id = "nextButton" type="button" class="btn-next btn-sm" style = {{backgroundColor: GRIS_CLAIR}} onClick={() =>
          {
            //On grise l'icône de l'étape 1
            document.getElementById("boutonEtape1ID").style.backgroundColor = GRIS_CLAIR;
            document.getElementById("texteBoutonEtape1ID").style.color = NOIR;


            //On change l'icône de l'étape 2 en rouge et cachons le champ de texte
            document.getElementById("boutonEtape2ID").style.backgroundColor = ROUGE;
            document.getElementById("texteBoutonEtape2ID").style.color = BLANC;
            document.getElementById("divNomMacroID").style.display = "none";

            //On fait disparaitre le bouton Next et faisons apparaitre le bouton Previous
            document.getElementById("nextButton").style.display = "none";
            document.getElementById("PreviousButton").style.display = "block";

           window.location.href='#MacroSkillsEtape2';

         }}> Next </button>



        {/*Affichage du bouton Previous en bas à gauche de la page et passage à l'étape précédente*/ }
          <button id = "PreviousButton" type="button" class="btn-prev btn-sm btn-danger" onClick={() =>
            {
              //On change l'icône de l'étape 1 en rouge
              document.getElementById("boutonEtape1ID").style.backgroundColor = ROUGE;
              document.getElementById("texteBoutonEtape1ID").style.color = BLANC;

              //On grise l'icône de l'étape 2 et on réaffiche le champ de texte
              document.getElementById("boutonEtape2ID").style.backgroundColor = GRIS_CLAIR;
              document.getElementById("texteBoutonEtape2ID").style.color = NOIR;
              document.getElementById("divNomMacroID").style.display = "block";

            //On fait apparaitre le bouton Next et faisons disparaitre le bouton Previous
              document.getElementById("nextButton").style.display = "block";
              document.getElementById("PreviousButton").style.display = "none";

              window.location.href='#MacroSkillsEtape1';

            }}> Previous </button>


            </div>
        </div>
</div> //Fin div App



  );

}

export default App;
