import { useState, useEffect } from "react";
import Car from "./Car";

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Llang8/cars-api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <>
      {cars.map((car) => (
        <Car car={car} key={car.id} />
      ))}
    </>
  );
}
