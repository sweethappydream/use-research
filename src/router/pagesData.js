import ContactSales from "../pages/ContactSales";
import Home from "../pages/Home";
import Plan from "../pages/Plan";
import Story from "../pages/Story";
import TalkToExperts from "../pages/TalkToExperts";
import Team from "../pages/Team";
import Tester from "../pages/Tester";
import Outline from "../layout";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

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
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  }
];

export default pagesData;