import { Outlet } from "react-router-dom";
import Header from "./Header";


const Root = () => {
    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Header></Header>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;