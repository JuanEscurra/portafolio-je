import backend from "../../assets/skills/backend.png";
import database from "../../assets/skills/database.png";
import frontend from "../../assets/skills/frontend.png";
import tools from "../../assets/skills/tools.png";

export interface Category {
  title: string;
  icon: string;
  items: Array<string>;
}

export const categories: Category[] = [
  {
    title: "backend",
    icon: backend,
    items: ["Java", "Spring", "PHP"],
  },
  {
    title: "frontend",
    icon: frontend,
    items: ["HTML", "Javascript", "CSS", "React JS"],
  },
  {
    title: "database",
    icon: database,
    items: ["mysql", "Postgresql"],
  },
  {
    title: "tools",
    icon: tools,
    items: ["postman", "github", "VSCode", "Intellij IDEA"],
  },
];
