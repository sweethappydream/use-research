import ContactSales from "./ContactSales";
import Home from "./Home";
import Plan from "./Plan";
import Story from "./Story";
import TalkToExperts from "./TalkToExperts";
import Team from "./Team";
import Tester from "./Tester";
import Outline from "../layout";

const pagesData = [
  {
    path: "",
    element: <Outline />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "story",
        element: <Story />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "tester",
        element: <Tester />,
      },
      {
        path: "plan",
        element: <Plan />,
      }
    ]
  },
  {
    path: "talktoexperts",
    element: <TalkToExperts />,
  },
  {
    path: "contactsales",
    element: <ContactSales />,
  }
];

export default pagesData;