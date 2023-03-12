import { useRoutes } from "react-router-dom";
import pagesData from "./pagesData";

const Router = () => {
  return useRoutes(pagesData);
};

export default Router;