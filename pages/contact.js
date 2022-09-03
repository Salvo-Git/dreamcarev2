import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import ContactMap from "../components/ContactMap";




const ContactPage = () => (

    <Layout pageTitle="Vimns | Contact us">
        <NavOne />

        <PageHeader title="Contact" />
        <ContactForm />
        <ContactInfo />
        <ContactMap />

        <Footer />

    </Layout>

)

export default ContactPage;