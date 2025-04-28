
import { useNavigate } from "react-router-dom";



function ClickButton({title, navigateTo}) {

    const navigate = useNavigate();

    function handleClick() {
        if(navigateTo) {
            navigate(navigateTo)
        }
    }


    return(
        <button className="click-button" onClick={handleClick}>{title}</button>
    );
}

export default ClickButton