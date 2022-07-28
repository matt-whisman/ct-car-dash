import { useState, useEffect, useContext } from "react";
import Car from "./Car";
import { DataContext } from "../contexts/DataProvider";

export default function CarList() {
  const { cars } = useContext(DataContext);

  return (
    <>
      {cars.map((car) => (
        <Car car={car} key={car.id} />
      ))}
    </>
  );
}
