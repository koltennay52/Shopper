//TODO

import express from "express";
import { indexPage, itemForm, deletePage, basketForm} from "../controllers/index";
import { getBasketContentsAPI, deleteWholeBasketAPI, updateBasketAPI, getPantryAPI, createBasketAPI } from "../controllers/basket"

let router = express.Router();

export function configureRoutes(app) {
  //Pages
  router.get("/", indexPage);

//Basket APIs 
router.get('/api/basket/:basketName', getBasketContentsAPI);
router.get('/api/pantry', getPantryAPI);
router.put('/api/basket/:basketName', updateBasketAPI);
router.post('/api/basket/:basketName', createBasketAPI);
router.delete('/api/basket/:basketName', deleteWholeBasketAPI);

//Form Routes
router.get('/item/form', itemForm);
router.get('/item/delete', deletePage);
router.get('/basket/form', basketForm)

  app.use("/", router);
}
