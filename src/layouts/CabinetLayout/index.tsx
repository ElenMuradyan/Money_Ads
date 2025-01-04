import { Outlet } from "react-router-dom"
import Header from "../../components/global/Header";
import Footer from '../../components/global/Footer';

import './index.css';

const CabinetLayout = () => {
    return(
        <div className="cabinet">
        <Header />
        <Outlet />
        <Footer />
        </div>
    )
};

export default CabinetLayout;