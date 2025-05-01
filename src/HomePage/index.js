import Activity from "../Activities/Screens/Activity"
import CarouselPage from "../CarouselBar/Screens/Carousel"
import Clients from "../Client/Screens/Clients"
import Header from "../Home/Screens/Header"
import CarouselServices from "../Services/Screens/CarouselServices"
import ContentFooter from "../Services/Screens/ContentFooter"
import ServicesHome from "../Serviceslatest/Screens/ServicesHome"

const HomePage = () => {
    return (
        <>
            <Header />
            <CarouselPage />
            <Activity />
            <ServicesHome />
            <CarouselServices />
            <Clients />
            <ContentFooter />
        </>
    )
}
export default HomePage