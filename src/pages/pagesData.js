import Home from "./Home";
import Story from "./Story";
import TalkToExperts from "./TalkToExperts";
import Team from "./Team";
import Tester from "./Tester";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "story",
    element: <Story/>,
    title: "story"
  },
  {
    path: "team",
    element: <Team/>,
    title: "team"
  },
  {
    path: "tester",
    element: <Tester/>,
    title: "tester"
  },
  {
    path: "talktoexperts",
    element: <TalkToExperts/>,
    title: "talktoexperts"
  }
];

export default pagesData;