import { Categories } from '../components/Categories';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Newsletter } from '../components/Newsletter';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
