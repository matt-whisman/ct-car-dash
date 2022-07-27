import { Link } from "react-router-dom";

export default function Car(props) {
  function buildHeader() {
    let resHeader;
    if (!props.hideLink) {
      resHeader = (
        <Link to={"/blog/" + props.car.id}>
          {props.car.id}: {props.car.body}
        </Link>
      );
    } else {
      resHeader = (
        <>
          {props.car.id}: {props.car.body}
        </>
      );
    }
    return resHeader;
  }
  return (
    <div className="card">
      <h2>{buildHeader()}</h2>
      <p>
        Year: {props.car.year}, Color: {props.car.color}
      </p>
    </div>
  );
}
