import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import FaqPage from "../components/FaqPage";
import ContactForm from "../components/ContactForm";




const FaqsPage = () => (

    <Layout pageTitle="Vimns | FAQs">
        <NavOne />

        <PageHeader title="FAQs" />
        <FaqPage />
        <ContactForm />


        <Footer />

    </Layout>

)

export default FaqsPage;