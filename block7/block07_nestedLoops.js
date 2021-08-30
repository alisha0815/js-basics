var hotel = [
  {
    rooms: [
      { expensive: ["deluxe", "grand deluxe"] },
      { midPriced: ["standard", "superior"] },
      { economic: ["dormitory 6 beds", "dormitory 12 beds"] },
    ],
  },
];

console.log(hotel);

hotel.forEach(function (ele) {
  console.log(ele.rooms);
  ele.rooms.forEach(function (condition) {
    console.log(condition);
    if (condition.expensive) {
      console.log(condition.expensive);
      condition.expensive.forEach(function (descrip) {
        console.log(`Room condition is ${descrip}`);
      });
    } else if (condition.midPriced) {
      condition.midPriced.forEach(function (priceEle) {
        console.log(`Economic is ${priceEle}`);
      });
    } else if (condition.economic) {
      condition.economic.forEach(function (ecoEle) {
        console.log(`Economic is ${ecoEle}`);
      });
    }
  });
});
