import project1 from "../../assets/projects/restaurante-baratie.png";
import project2 from "../../assets/projects/api-rest-countries.png";
import project3 from "../../assets/projects/desafios-frontend-mentor.png";

export interface ProjectItem {
  title: string;
  description: string;
  tools: Array<string>;
  link: string;
  img?: string;
}

export const projects: Array<ProjectItem> = [
  {
    title: "Restaurante Baratie",
    description:
      "La aplicación web está pensado para la mejora en los procesos de negocio de un restaurante. Mejorando la velocidad del servicio, la claridad y precisión (reducción de errores, como puede ser calcular cuentas y vuelto, concordancia con los repotes y stock, etc.). Los procesos que se verán beneficiados son actualizar carta, gestionar comandas, generar boletas, emitir reportes.",
    tools: [],
    link: "https://github.com/JuanEscurra/restaurante-spring-boot",
    img: project1,
  },
  {
    title: "API REST countries",
    description:
      "Nos permite visualizar y buscar de manera facil información de un país como puede ser los idiomas, población, región, capital, etc. Gracias al Consumiendo de una API REST (Rest Countries) con React.js.",
    tools: [],
    link: "https://juanescurra.github.io/api-rest-countries/",
    img: project2,
  },
  {
    title: "Desafios de Frontend Mentor",
    description:
      "Resolviendo desafios de estructuración de contenido web e implementación de los diversos diseños profesionales utilizando las tecnologias basicas de la web como html, css y javascript.",
    tools: [],
    link: "https://www.frontendmentor.io/profile/JuanEscurra/solutions",
    img: project3,
  },
];
