var hotel = [
  {
    rooms: [
      { expensive: ["deluxe", "grand deluxe"] },
      { midPriced: ["standard", "superior"] },
      { economic: ["dormitory 6 beds", "dormitory 12 beds"] },
    ],
  },
];

// console.log(hotel);

// the solution to do the same without knowing ANY key in our data structure:
hotel.forEach((ele) => {
  //   console.log(ele);
  for (var key in ele) {
    // console.log(ele[key]);
    ele[key].forEach((ele2) => {
      //   console.log(ele2);
      //  { expensive: ["deluxe", "grand deluxe"]; }
      // { midPriced: ["standard", "superior"];}
      // {economic: ["dormitory 6 beds", "dormitory 12 beds"];}
      for (var key2 in ele2) {
        console.log(ele2[key2]);
        ele2[key2].forEach((ele3) => {
          console.log(key2, ele3);
          console.log(`${key2} :${ele3}`);
        });
      }
    });
  }
});
