import './App.css';
import MiApi from './components/MiApi';
import Footer from './components/Footer';



function App() {
  return (
    <main className="container-fluid">
    <header>
       <h2 className='text-center'>Base Datos Usuarios</h2> 
     </header>
      <section>
        <MiApi/>
        </section>
        <section> 
         <Footer/>
        </section>   
    </main>
  );
}

export default App;
