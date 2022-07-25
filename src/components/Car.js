export default function Car(props) {
  console.log(props);

  return (
    <div className="card">
      <h2>
        {props.car.make}, {props.car.model}
      </h2>
      <p>
        Year: {props.car.year}, Color: {props.car.color}
      </p>
    </div>
  );
}
