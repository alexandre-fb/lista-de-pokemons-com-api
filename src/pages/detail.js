import { PageContainer } from '../components/page-container'
import { Header } from "../components/header";
import { MainDetails } from "../components/main-details";
import { Footer } from "../components/footer";

const Detail = () => {
  return (
    <PageContainer>
      <Header />
      <MainDetails />
      <Footer />
    </PageContainer>
  );
};

export { Detail };
