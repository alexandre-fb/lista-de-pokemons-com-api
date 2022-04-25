import { PageContainer } from '../components/page-container'
import { Header } from "../components/header";
import { MainHome } from "../components/main-home";
import { Footer } from "../components/footer";


const Home = () => {

  return (
    <PageContainer>
        <Header/>
        <MainHome />
        <Footer />
     </PageContainer>
  );
};

export { Home };
