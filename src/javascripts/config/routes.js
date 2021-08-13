//TODO

import express from "express";
import { indexPage, registerPage, loginPage } from "../controllers/index";
import { getBasketContentsAPI } from "../controllers/basket"

let router = express.Router();

export function configureRoutes(app) {
  //Pages
  router.get("/", indexPage);
//   router.get("/register", registerPage);
//   router.get("/login", loginPage);

//Basket APIs 
router.get('/api/basketContents/:basketName', getBasketContentsAPI);

  app.use("/", router);
}
