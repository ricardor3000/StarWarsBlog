import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CharCard from "../component/charCard";
import PlanetCard from "../component/planetCard";
import ShipCard from "../component/shipCard";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="heading">Personajes</h2>
        </Col>
      </Row>
      <Row>
        <div className="d-flex justify-content-between overFlow">
          {store.people
            ? store.people.map((elem, index) => (
                <CharCard key={index} id={++index} character={elem} />
              ))
            : ""}
        </div>
      </Row>
      <Row>
        <Col>
          <h2 className="heading">Planetas</h2>
        </Col>
      </Row>
      <Row>
        <div className="d-flex justify-content-between overFlow">
          {store.planets
            ? store.planets.map((elem, index) => (
                <PlanetCard key={index} id={++index} planet={elem} />
              ))
            : ""}
        </div>
      </Row>
      <Row>
        <Col>
          <h2 className="heading">Naves</h2>
        </Col>
      </Row>
      <Row>
        <div className="d-flex justify-content-between overFlow">
          {store.starShips
            ? store.starShips.map((elem, index) => (
                <ShipCard key={index} id={++index} ship={elem} />
              ))
            : ""}
        </div>
      </Row>
    </Container>
  );
};
