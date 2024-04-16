import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';

function App() {
  const direccion = "https://restcountries.com/v3.1/all";

  const [contenido, setContenido] = useState();

  const fetchData = async () => {
    const response = await fetch(direccion);
    const data = await response.json();

    const sortedData = data.sort((a, b) => {
      if (a.name.common < b.name.common) return -1;
      if (a.name.common > b.name.common) return 1;
      return 0;
    });

    setContenido(sortedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(contenido);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Capital</th>
                  <th>Poblacion</th>
                  <th>Inicio semana</th>
                  <th>Bandera</th>
                </tr>
              </thead>
              <tbody>
                {contenido?.map((pais, index) => (
                  <tr key={index}>
                    <td>{pais.name.common}</td>
                    <td>{pais.capital}</td>
                    <td>{pais.startOfWeek}</td>
                    <td>{pais.population}</td>
                    <td>
                      <img src={pais.flags.png} alt={pais.altSpellings[0]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
