import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
