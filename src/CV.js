import React from "react";
import "./Styles/CV.css";

const sections = [
  {
    id: "Softskills",
    title: "Savoir être",
    icon: "🌟",
    items: [
      "Autodidacte",
      "Esprit d'analyse",
      "Observateur",
      "Organisé",
      "Réactif",
      "Sens du service",
      "Créatif",
    ],
  },
  {
    id: "Tools",
    title: "Outils",
    icon: "🛠️",

    subSections: [
      {
        subTitle: "Développement",
        items: [
          "Visual Studio Code",
          "HTML",
          "CSS",
          "JS",
          "PHP",
          "GIT",
          "GITHUB",
          "REACT",
        ],
      },

      {
        subTitle: "Bureautique",
        items: [
          "Word",
          "Excel",
          "Powerpoint",
          "One Drive",
          "One Note",
          "Canva",
        ],
      },
      {
        subTitle: "",
        items: [],
      },
    ],
  },
  {
    id: "Skills",
    title: "Compétences",
    icon: "✒️",

    subSections: [
      {
        subTitle: "Tâches administratives",
        items: [
          "Rédaction de documents",
          "Réalisation de diaporama",
          "Base de données (Excel)",
          "Accueil / orientation",
          "Classification / tri",
          "Gestion de dossier",
          "Gestion Planning",
          "Numériser",
          "Imprimer",
        ],
      },
      {
        subTitle: "Commerce",
        items: ["Mise en rayon", "Gestion de la caisse"],
      },
    ],
  },
  {
    id: "Experiences",
    title: "Expériences professionnelles",
    icon: "💼",
    items: [
      "Décembre 2024 (2 semaines) - PMSMP: Agent d’accueil et administratif - Clinique Beau Soleil",
      "Décembre 2024 (1 jour) - PMSMP: Agent d’accueil et d’orientation - Forum de l’emploi public",
      "Septembre - Décembre 2023 (3 mois) - Alternance: Assistant de Direction - Certifeco",
      "Mai 2023 (2 semaines) - Stage: Secrétaire Comptable - Certifeco",
      "Mars 2023 (2 semaines) - Stage: Employé Administratif et d’accueil - Connexion graphique",
      "Décembre 2022 (3 semaines) - Stage: Employé Administratif et d’accueil Ligue de l'enseignement",
      "Septembre 2022 (3 semaines) - Stage: Employé libre service - Picard",
      "Août 2022 (2 semaines) - Stage: Agent de recrutement - Adecco",
      "Juin 2022 (2 semaines) - Stage: Opticien - ATOL",
      "Mars 2022 (1 mois) - CDD: Animateur périscolaire - Ecole maternelle Thierry Pautes",
      "Novembre 2021 (2 semaines) - Stage: Fleuriste - Le Liseron",
    ],
  },
  {
    id: "Formation",
    title: "Formations",
    icon: "🎓",
    items: [
      "Janvier 2024 (Actuel): Suivi de Cours en ligne avec Open Classrooms",
      "Septembre 2023 - Novembre 2023: Certifeco: Titre Professionnel Assistant de direction",
      "Avril 2023 - Septembre 2023: Irfasud: Titre Professionnel - Secrétaire Comptable",
      "Février 2023 - Avril. 2023: Irfasud: Formation PROJET PRO",
      "Juin 2022 - Février 2023: E2C: Formation PROJET PRO",
      "2021: Baccalauréat Général Scientifique",
    ],
  },
  {
    id: "Hobbies",
    title: "Centres d'intérêt",
    icon: "🏠",
    items: [
      "Piano",
      "Photographie",
      "Dessin",
      "Jeux vidéos",
      "Musique",
      "Excel",
      "Powerpoint",
    ],
  },
];

function CV() {
  return (
    <div className="CV">
      <div className="sidebar">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}

        </ul>
      </div>
      <div className="content">
        {sections.map((section) => (
          <section id={section.id} key={section.id}>
            <div>
              <h2>
                {section.icon}
                {section.title}
              </h2>
              {section.items ? (
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div className="grid">
                  {section.subSections.map((subSection, subIndex) => (
                    <div key={subIndex}>
                      <h3>{subSection.subTitle}</h3>
                      <ul>
                        {subSection.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default CV;
