//TODO

import express from "express";
import { indexPage, registerPage, loginPage } from "../controllers/index";
import { getBasketContentsAPI, deleteWholeBasketAPI, updateBasketAPI, getPantryAPI, createBasketAPI } from "../controllers/basket"

let router = express.Router();

export function configureRoutes(app) {
  //Pages
  router.get("/", indexPage);
//   router.get("/register", registerPage);
//   router.get("/login", loginPage);

//Basket APIs 
router.get('/api/basket/:basketName', getBasketContentsAPI);
router.get('/api/pantry', getPantryAPI);
router.put('/api/basket/:basketName', updateBasketAPI);
router.post('/api/basket/:basketName', createBasketAPI);
router.delete('/api/basket/:basketName', deleteWholeBasketAPI);

  app.use("/", router);
}
