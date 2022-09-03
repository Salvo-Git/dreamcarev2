import Head from 'next/head';

import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import BrandTwo from "../components/BrandTwo";
import Symptomps from "../components/Symptomps";
import AboutFour from "../components/AboutFour";
import AboutFive from "../components/AboutFive";
import Video from "../components/Video";
import Progress from "../components/Progress";
import Team from "../components/Team";
import CallToActionTwo from "../components/CallToActionTwo";
import Testimonial from "../components/Testimonial";
import FunFactTwo from "../components/FunFactTwo";
import MapImage from "../components/MapImage";
import BlogHome from "../components/BlogHome";
import CallToAction from "../components/CallToAction";


const HomeTwo = () => (

    <div>
        <Layout pageTitle="Vimns | Home 2 Dark">

            <NavTwo />

            <Slider />
            <BrandTwo />
            <Symptomps />
            <AboutFour />
            <AboutFive />
            <Video />
            <Progress />
            <Team />
            <CallToActionTwo />
            <Testimonial />
            <FunFactTwo />
            <MapImage />
            <BlogHome />
            <CallToAction />

            <Footer />

        </Layout>

        <Head>
            <link rel="stylesheet" href="/assets/css/dark.css" />
        </Head>

    </div>

)

export default HomeTwo;