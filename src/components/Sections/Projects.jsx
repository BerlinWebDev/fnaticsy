import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import ProjectLoso from "../../assets/img/projects/loso.png";
import ProjectDigitalMedia from "../../assets/img/projects/digitalmedia.png";
import ProjectGamehub from "../../assets/img/projects/gamehub.png";
import ProjectNetflix from "../../assets/img/projects/netflix.png";
import ProjectTagesmieten from "../../assets/img/projects/tagesmieten.png";
import ProjectImg6 from "../../assets/img/projects/6.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Einige Projekte</h1>
            <p className="font13">
              Hier sind einige unserer Projekte aus der Vergangenheit zu finden.
              <br />
              Bei einigen wurden die Inhalte geändert.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectLoso}
                title="Loso - App Website"
                text="Die Seite Loso ist eine moderne, saubere und responsive Website. Sie bietet detaillierte Informationen über die Agentur, ihre Dienstleistungen und ihre Vorteile. Die Seite ist in verschiedene Abschnitte unterteilt, wie “Über uns”, “Warum wir?”, “Funktionen” und “Screens”, die die Hauptmerkmale und Vorzüge der Agentur präsentieren. Testimonials von zufriedenen Kunden sowie Download-Links sind ebenfalls verfügbar, um das Vertrauen der Besucher zu stärken und die Benutzerfreundlichkeit zu erhöhen. Hierbei wurde die Seite auf Rücksicht des Kunden inhaltlich geändert."
                action={() => window.open("https://www.google.de", '_blank')} //TODO
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectDigitalMedia}
                title="Digital Media"
                text="Präsenz einer beispielhaften Agency Agentur mit besonderen Fokus auf die Präsentation der Dienstleistungen und der Teammitglieder. Die Seite ist in verschiedene Abschnitte unterteilt, die die Hauptmerkmale und Vorzüge der Agentur präsentieren. Testimonials von zufriedenen Kunden sowie Download-Links sind ebenfalls verfügbar, um das Vertrauen der Besucher zu stärken und die Benutzerfreundlichkeit zu erhöhen."
                action={() => alert("clicked")} //TODO
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectGamehub}
                style={{ height: "585px", width: "265px" }}
                title="Gamehub"
                text="Die Seite Game Hub ist eine moderne Plattform für Gamer, die mit Vite und React entwickelt wurde. Sie bietet eine übersichtliche und benutzerfreundliche Oberfläche, auf der Nutzer eine breite Auswahl an Spielen durchsuchen können. Jedes Spiel wird mit einem ansprechenden Bild und grundlegenden Informationen dargestellt. Die Seite lädt schnell und reagiert flüssig auf Benutzerinteraktionen. Das klare, zeitgemäße Design sorgt für ein angenehmes Benutzererlebnis und macht es einfach, neue Spiele zu entdecken und Details zu bereits bekannten Titeln zu finden. Des Weiteren kann der Besucher die Seite in den Darkmode umschalten."
                action={() => window.open("https://game-hub-kappa-ashen.vercel.app/", '_blank')}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectNetflix}
                title="Netflix-Klon"
                text="Die Seite ist eine Nachbildung der Netflix-Benutzeroberfläche, erstellt mit React. Sie bietet eine übersichtliche Darstellung von Filmen und Serien, organisiert in verschiedenen Kategorien. Benutzer können durch die Inhalte scrollen und erhalten eine visuelle Vorschau von Titeln. Die Seite besticht durch ein modernes, ansprechendes Design und eine benutzerfreundliche Navigation, ähnlich dem Original-Netflix-Interface. Zusätzlich kann eine Account erstellt um beliebte Titel zu speichern. Die Netflix Clone Seite bietet ein unterhaltsames und interaktives Erlebnis für Film- und Serienliebhaber."
                action={() => window.open("https://react-netflixd.vercel.app", '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectTagesmieten}
                title="Tagesmieten.de"
                text="Tagesmieten.de ist eine deutsche Webseite, die sich auf die Verwaltung von Mietwohnungen auf Tagesbasis spezialisiert hat. Die Plattform ermöglicht es Vermietern das ganze zu verwalten. Hierbei wurde auch das ganze Backend entwickelt mit all ihren Funktionalitäten, wie das Anlegen von Mietern, Mietobjekten oder das Generieren von Rechnungen."
                action={() => window.open("https://www.tagesmieten.de", '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")} //TODO
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
