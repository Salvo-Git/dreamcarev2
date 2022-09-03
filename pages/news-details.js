import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NewsDetails from "../components/NewsDetails";




const NewsDetailsPage = () => (

    <Layout pageTitle="Vimns | News Details">
        <NavOne />

        <PageHeader title="News Details"/>
        <NewsDetails />

        <Footer />

    </Layout>

)

export default NewsDetailsPage;