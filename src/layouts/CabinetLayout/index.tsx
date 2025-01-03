import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import { RootState } from "../../state-management/store";
import Header from "../../components/global/Header";
import Footer from '../../components/global/Footer';

import './index.css';

const CabinetLayout = () => {
    const { isAuth } = useSelector((store: RootState) => store.userProfileInformation.userProfileInfo);

    return(
        <div className="cabinet">
        <Header />
        <Outlet />
        <Footer />
        </div>
    )
};

export default CabinetLayout;