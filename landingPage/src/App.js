
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body'
import Footer from './components/footer/footer';
import Contact from './components/footer/contact';
import New from './components/news';
import Partner from './components/partners';
import Target from './components/topic/target';
import ItnuoiIt from './components/topic/ItnuoiIt';

import Formcontact from './components/footer/formcontact';
function App() {
  return (
    <div >
      <Header />
      <Body />
      <ItnuoiIt></ItnuoiIt>
      <Target></Target>
      <New></New>

      <Partner></Partner>
      <Contact>
      </Contact>
      <Formcontact></Formcontact>

      <Footer />

    </div>
  );
}

export default App;
