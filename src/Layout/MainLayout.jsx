import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Spinner from "../Components/Spinner/Spinner";


const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <Spinner></Spinner> :
                    <Outlet></Outlet>
            }
        </div>
    );
};

export default MainLayout;