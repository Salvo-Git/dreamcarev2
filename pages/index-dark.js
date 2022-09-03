import Head from 'next/head';

import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import BannerOne from "../components/BannerOne";
import CallToActionThree from "../components/CallToActionThree";
import AboutOne from "../components/AboutOne";
import FunFactOne from "../components/FunFactOne";
import ServiceOne from "../components/ServiceOne";
import PreventionOne from "../components/PreventionOne";
import CallToActionTwo from "../components/CallToActionTwo";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import BrandOne from "../components/BrandOne";
import FaqOne from "../components/FaqOne";
import BlogHome from "../components/BlogHome";
import Subscribe from "../components/Subscribe";



const Home = () => (

    <div>

        <Layout pageTitle="Vimns - Home 1 Dark">
            <NavOne />

            <BannerOne />
            <CallToActionThree />
            <AboutOne />
            <FunFactOne />
            <ServiceOne />
            <PreventionOne />
            <CallToActionTwo />
            <AboutTwo />
            <BrandOne />
            <FaqOne />
            <BlogHome />
            <Subscribe />

            <Footer />

        </Layout>

        <Head>
            <link rel="stylesheet" href="/assets/css/dark.css" />
        </Head>

    </div>

)

export default Home;