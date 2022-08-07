const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "Socks",
      price: 10,
      image:
        "https://cdn.dsmcdn.com//ty208/product/media/images/20211022/19/154460422/271809990/1/1_org.jpg",
    },
    {
      id: 2,
      name: "Bag",
      price: 20,
      image:
        "https://cdn.dsmcdn.com//ty223/product/media/images/20211103/0/164267110/286794079/1/1_org.jpg",
    },
    {
      id: 3,
      name: "Shoes",
      price: 30,
      image:
        "https://cdn.dsmcdn.com//ty136/product/media/images/20210624/20/104106480/60227307/1/1_org.jpg",
    },
    {
      id: 4,
      name: "Sport Hat",
      price: 40,
      image:
        "https://cdn.dsmcdn.com//ty74/product/media/images/20210330/10/76196326/22083246/1/1_org.jpg",
    },
  ]);
});

module.exports = router;
