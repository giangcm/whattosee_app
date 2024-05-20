
// import { useHistory } from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Layout = () => {
    let navigate = useNavigate();
    
    const user=[
        {id:1,name:"Ulrikke",hobby:""},
        {id:2,name:"Marius",hobby:""},
        {id:3,name:"Egil",hobby:""},
    ]
    const handleClick=(e)=>{
        localStorage.setItem("name",e.name)
        navigate("/home");
    }
    useEffect(()=>{
        let checkToken=localStorage.getItem("name");
        checkToken?navigate("/home"):navigate("/")

    },[])
    return (
        <>
            <h2>Hvem skal se i dag</h2>
            <p>Velg bruker</p>
            {user.map((value,index)=>
                <span key={index}><button onClick={()=>handleClick(value)}>{value.name}</button></span>
            )}
        </>
    )
};

export default Layout;