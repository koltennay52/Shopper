export const getBasketContentsAPI = (req, res, next) => {
  let basketName = req.params.basketName;
  let requestResults;

  const request = require("request");
  request(
    `https://getpantry.cloud/apiv1/pantry/7fd410ee-3aa4-4d17-be6c-436eeaa22a72/basket/${basketName}`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) { 
        requestResults = JSON.parse(body);
        res.status(200).json(requestResults);
        res.end();
      } else {
        res.status(404);
        res.end();
      }
    }
  );
};

export const deleteWholeBasketAPI = (req, res, next) => {
  let basketName = req.params.basketName;
  let requestResults; 

  const request = require("request");

  const options = {
    url: `https://getpantry.cloud/apiv1/pantry/7fd410ee-3aa4-4d17-be6c-436eeaa22a72/basket/${basketName}`,
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Host: "getpantry.cloud",
    },
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200);
      res.end();
    } else {
      res.status(404);
      res.end();
    }
  });
};

export const updateBasketAPI = (req, res, next) => {
  let basketName = req.params.basketName;
  let sentBasket = req.body;
  let stringyMan = JSON.stringify(sentBasket);
  let requestResults;

  var request = require("request");
  var options = {
    method: "PUT",
    url: `https://getpantry.cloud/apiv1/pantry/7fd410ee-3aa4-4d17-be6c-436eeaa22a72/basket/${basketName}`,
    headers: {
      "Content-Type": "application/json",
    },
    body: stringyMan,
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      requestResults = JSON.parse(body);
      res.status(200).json(requestResults);
      res.end();
    } else {
      res.status(404).json(error);
      res.end();
    }
  });
};

export const createBasketAPI = (req, res, next) => {
  let basketName = req.params.basketName;
  let requestResults;

  const request = require("request");

  const options = {
    url: `https://getpantry.cloud/apiv1/pantry/7fd410ee-3aa4-4d17-be6c-436eeaa22a72/basket/${basketName}`,
    method: "POST",
    headers: {
      Accept: "application/json",
      Host: "getpantry.cloud",
    },
  };
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200);
      res.end();
    } else {
      res.status(404);
      res.end();
    }
  });
};

export const getPantryAPI = (req, res, next) => {
  let pantryResults;
  
  const request = require("request");
  request(
    `https://getpantry.cloud/apiv1/pantry/7fd410ee-3aa4-4d17-be6c-436eeaa22a72`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        pantryResults = JSON.parse(body);
        res.status(200).json(pantryResults);
        res.end();
      } else {
        res.status(404);
        res.end();
      }
    }
  );
};
