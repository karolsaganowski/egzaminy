import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function App() {
  const [isCHecked, setIsChecked] = useState(true);
  const [siteName, setSiteName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState([]);

  const handleSubmit = (e) => {
    setAccount([{ siteName: siteName, login: login, password: isCHecked ? "Hasło automatycznie generowane" : `Hasło: ${password}` }]);
  }

  return (
    <div>
      <h1>Menedżer haseł - wykonał 00000000000</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formSiteName">
          <Form.Label>Adres WWW:</Form.Label>
          <Form.Control type="text" placeholder="Adres strony WWW" onChange={(e) => setSiteName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLogin">
          <Form.Label>Login:</Form.Label>
          <Form.Control type="text" placeholder="Twoj login" onChange={(e) => setLogin(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Check type="checkbox" label="Generuj hasło" onChange={() => setIsChecked(!isCHecked)} checked={isCHecked} />
          <Form.Label>Hasło:</Form.Label>
          <Form.Control type="password" disabled={isCHecked} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Zapisz
        </Button>
      </Form>

      <div>
        <p className='m-0 p-2 text-primary'>Adres: {account[0]?.siteName}</p>
        <p>Login: {account[0]?.login}</p>
        <p>Hasło: {account[0]?.password}</p>
      </div>
    </div>
  );
}

export default App;
