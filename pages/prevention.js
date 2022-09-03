import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import PreventionTwo from "../components/PreventionTwo";
import HandWash from "../components/HandWash";
import CallToAction from "../components/CallToAction";



const PreventionPage = () => (

    <Layout pageTitle="Vimns | Prevention">
        <NavOne />

        <PageHeader title="Prevention" />
        <PreventionTwo />
        <HandWash />
        <CallToAction />


        <Footer />

    </Layout>

)

export default PreventionPage;