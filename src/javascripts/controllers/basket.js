
export const getBasketContentsAPI = (req, res, next) => {

    let basketName = req.params.basketName
    let basketResults;
    
    const request = require("request");
    request(
      `https://getpantry.cloud/apiv1/pantry/7fd410ee-3aa4-4d17-be6c-436eeaa22a72/basket/${basketName}`,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          basketResults = JSON.parse(body);
          res.status(200).json(basketResults);
          res.end();
        }
        else {
            res.status(404).json("poo");
            res.end();
        }
      }
    );
}

export const deleteBasketAPI = (req, res, next) => {
    const categoryID = req.params.categoryID;


}

export const updateBasketAPI = (req, res, next) => {
    let category = new Category();

}

export const getPantryAPI = (req, res, next) => {
    const categoryID = req.params.categoryID;

}
