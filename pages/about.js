import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import AboutThree from "../components/AboutThree";
import Testimonial from "../components/Testimonial";
import CallToActionTwo from "../components/CallToActionTwo";
import BrandOne from "../components/BrandOne";
import Team from "../components/Team";



const AboutPage = () => (

    <Layout pageTitle="Vimns | About Us">
        <NavOne />

        <PageHeader title="About Us" />
        <AboutThree />
        <Testimonial />
        <CallToActionTwo />
        <BrandOne />
        <Team />

        <Footer />

    </Layout>

)

export default AboutPage;