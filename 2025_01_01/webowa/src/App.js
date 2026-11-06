import logo from './logo.svg';
import './App.css';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [dane, setDane] = useState([{ id: 0, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
  { id: 1, alt: "Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43 },
  { id: 2, alt: "Dalmatyńczyk", filename: "obraz3.jpg", category: 2, downloads: 2 },
  { id: 3, alt: "Świnka morska", filename: "obraz4.jpg", category: 2, downloads: 53 },
  { id: 4, alt: "Rotwailer", filename: "obraz5.jpg", category: 2, downloads: 43 },
  { id: 5, alt: "Audi", filename: "obraz6.jpg", category: 3, downloads: 11 },
  { id: 6, alt: "kotki", filename: "obraz7.jpg", category: 2, downloads: 22 },
  { id: 7, alt: "Róża", filename: "obraz8.jpg", category: 1, downloads: 33 },
  { id: 8, alt: "Świnka morska", filename: "obraz9.jpg", category: 2, downloads: 123 },
  { id: 9, alt: "Foksterier", filename: "obraz10.jpg", category: 2, downloads: 22 },
  { id: 10, alt: "Szczeniak", filename: "obraz11.jpg", category: 2, downloads: 12 },
  { id: 11, alt: "Garbus", filename: "obraz12.jpg", category: 3, downloads: 321 }])
  const [switche, setSwitche] = useState([true, true, true])
  /**********************************************
  nazwa metody: switching
  opis metody: zmienia odpowiedni switch w zależności który został zmieniony
  parametry: n - który switch należy zmienić
  zwracany typ i opis: brak
  autor: 22
  ***********************************************/
  const switching = (n) => {
    var tempSwitch = [...switche]
    var newSwitch = 0
    if (n === 1) {
      newSwitch = [!tempSwitch[0], tempSwitch[1], tempSwitch[2]]
    } else if (n === 2) {
      newSwitch = [tempSwitch[0], !tempSwitch[1], tempSwitch[2]]
    } else if (n === 3) {
      newSwitch = [tempSwitch[0], tempSwitch[1], !tempSwitch[2]]
    }
    setSwitche(newSwitch)
    console.log(switche)
  }
  /**********************************************
  nazwa metody: updateDownload
  opis metody: updateuje liczbę pobrań danego obrazka
  parametry: id - id obrazka któremu trzeba zwiększyć liczbę pobrać
  zwracany typ i opis: brak
  autor: 22
  ***********************************************/
  const updateDownload = (id) => {
    var tempDane = [...dane]
    tempDane[id].downloads += 1
    setDane(tempDane)
  }

  return (
    <div>
      <h1>Kategorie zdjęć</h1>
      <Form className="Switch">
        <Form.Switch onChange={e => switching(1)} checked={switche[0]} label="Kwiaty"></Form.Switch>
        <Form.Switch onChange={e => switching(2)} checked={switche[1]} label="Zwierzeta"></Form.Switch>
        <Form.Switch onChange={e => switching(3)} checked={switche[2]} label="Auta"></Form.Switch>
      </Form>
      <Row>
        {dane.map((item, key) => {
          if (item.category === 1 && switche[0] === false) {
            return;
          } else if (item.category === 2 && switche[1] === false) {
            return;
          } else if (item.category === 3 && switche[2] === false) {
            return;
          } else {
            return (
              <Col>
                <div key={key}>
                  <Image src={`assets/${item.filename}`} alt={item.alt} className="m-1"></Image>
                  <h4>Pobrania: {item.downloads}</h4>
                  <Button onClick={(e) => updateDownload(item.id)} className="btn-success">Pobierz</Button>
                </div>
              </Col>
            )
          }
        })}
      </Row>
    </div>
  );
}

export default App;
