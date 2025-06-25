import React from "react";

export default function ArraySort() {
  //   const numbers = [2, 5, 3, 24, 51, 7];
  //   let result;
  //   numbers.length;

  //   numbers.push(150);
  //   numbers.unshift(300);
  // numbers.pop();
  //   result = numbers.shift();

  //   result = numbers.indexOf(24);
  //  numbers.splice(1,2,160);
  //  numbers.splice(4,1);
  //  result=numbers.splice(3,3)
  // result=numbers.sort();
  // result=numbers.sort(function(x,y){
  //     return x-y;
  // });

  //   console.log(result);
  //   console.log(numbers);
  const names = ["Zahra", "Nafisa", "Maryam", "Ali", "Ahmad", "Fatima"];
  // names.sort();
  names.sort().reverse();
  console.log(names);

  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function (a, b) {
    return a - b;
  });
  points.toSorted().sort();
  console.log(points);

  const users = [
    { name: "Ali", age: 20 },
    { name: "Ahmad", age: 22 },
    { name: "Maryam", age: 24 },
  ];
  users.sort((a, b) => a.age - b.age);
  console.log(users);

  return (
    <div className="bg-white min-h-screen">
      <h>Welcome to my site</h>
    </div>
  );
}
