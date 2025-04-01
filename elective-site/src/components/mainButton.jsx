import { useNavigate } from "react-router-dom";



function MainButton({title, navigateTo}) {

    const navigate = useNavigate();

    function handleClick() {
        if(navigateTo) {
            navigate(navigateTo)
        }
    }


    return(
        <button className="main-button" onClick={handleClick}>{title}</button>
    );
}

export default MainButton