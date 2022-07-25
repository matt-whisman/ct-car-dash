import { useState } from "react";
import Car from "./Car";

export default function CarList() {
  const [cars, setCars] = useState([
    {
      id: 1,
      make: "Ford",
      model: "Mustang",
      color: "Blue",
      year: 1969,
    },
    {
      id: 2,
      make: "Dodge",
      model: "Ram",
      color: "Black",
      year: 2020,
    },
    {
      id: 3,
      make: "Toyota",
      model: "Tundra",
      color: "Red",
      year: 2022,
    },
  ]);

  return (
    <>
      {cars.map((car) => (
        <Car car={car} key={car.id} />
      ))}
    </>
  );
}
