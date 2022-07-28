import { useEffect, useState, useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import Car from '../components/Car'

export default function Home() {
  const { cars } = useContext(DataContext)

  return (
    <>
      <h1>Home</h1>
      <p>Current Car ID: {carId}</p>
      <div className="car">
        {loadState === "LOADED" ? (
          <>
            <h2>{car.name}</h2>
            <p>Year: {car.year}</p>
            <p>Selling Price: {car.selling_price}</p>
            <p>KM Driven: {car.km_driven}</p>
            <p>Fuel Type: {car.fuel}</p>
            <p>Seller Type: {car.seller_type}</p>
            <p>Transmission: {car.transmission}</p>
            <p>Owner: {car.owner}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Engine: {car.engine}</p>
            <p>Max Power: {car.max_power}</p>
            <p>Torque: {car.torque}</p>
            <p>Seats: {car.seats}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {carId > 1 ? (
        <button onClick={() => setCarId(carId - 1)}>Previous Car</button>
      ) : (
        <></>
      )}
      {carId < 14 ? (
        <button onClick={() => setCarId(carId + 1)}>Next Car</button>
      ) : (
        <></>
      )}
    </>
  );
}
