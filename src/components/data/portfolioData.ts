export interface PortfolioItem {
  id: number;
  category: string;
  image: string;
  link: string;
  title: string;
  client: string;
  date: string;
  description: string;
}

import Notes from "../../assets/Notes2.jpg";
import Todo from "../../assets/Todo.jpg";
import Book from "../../assets/Book.jpg";
import Theme from "../../assets/Theme.jpg";
import Card from "../../assets/Card.jpg";

export const portfolioItems: PortfolioItem[] = [
   {
    id: 1,
    category: "Personal",
    image: Theme,
    link: "https://multi-theme-switcher-app-tan.vercel.app/",
    title: "Notes App",
    client: "Personal Project",
    date: "01 March, 2024",
    description:
      "A simple notes app built with React, allowing users to add, edit, and delete notes with persistence.",
  },
  {
    id: 2,
    category: "Personal",
    image: Todo,
    link: "https://todo-app-seven-pearl.vercel.app/",
    title: "Todo App",
    client: "Personal Project",
    date: "10 March, 2024",
    description:
      "A responsive todo app built with React and TypeScript featuring add, edit, and delete tasks.",
  },
    {
    id: 3,
    category: "Personal",
    image: Book,
    link: "https://books-management-app.vercel.app/",
    title: "Book Management",
    client: "Personal Project",
    date: "10 March, 2024",
    description:
      "A responsive todo app built with React and TypeScript featuring add, edit, and delete tasks.",
  },
   {
    id: 4,
    category: "Personal",
    image: Notes,
    link: "https://notes-app-lime-two.vercel.app/",
    title: "Notes App",
    client: "Personal Project",
    date: "01 March, 2024",
    description:
      "A simple notes app built with React, allowing users to add, edit, and delete notes with persistence.",
  },
     {
    id: 5,
    category: "Personal",
    image: Card,
    link: "https://naveen-birthday-wishes.vercel.app/",
    title: "Birthday Card",
    client: "Personal Project",
    date: "01 March, 2024",
    description:
      "A simple notes app built with React, allowing users to add, edit, and delete notes with persistence.",
  },
];
