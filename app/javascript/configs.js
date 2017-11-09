import main_page from "./main_page/main_page.jsx";
import second_page from "./second_page/second_page.jsx";

export const viewsConfig = [
  // Insert views and their path mappings
  {component: main_page, path: '/'},
  {component: second_page, path: '/second_page'},];

export const navbarConfig = {
  // The different tabs and the link to where they are routed to.
  categories: [
    {title: 'Triage', link: '/'},
    {title: 'Queue', link: '/second_page'},],
  // The title image placed at the top, above nav.
  titleSrc: {
    path: '',
    alt: 'EasyHealthTriage',
    useImage: true,
  }
};