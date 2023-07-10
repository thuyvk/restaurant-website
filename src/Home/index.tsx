import Layout from "../Layout";
import SliderImage from "./SliderImage";
import AboutRestaurant from "./AboutRestaurant";
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Layout>
            <SliderImage />
            <Container>
                <AboutRestaurant />
            </Container>
        </Layout>

    )
}

export default Home;