import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Car from "../components/Car";

export default function BlogSingle() {
  const { id } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${carId}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  return <Car car={car} hideLink={true} />;
}
