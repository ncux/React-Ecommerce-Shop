import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className="mx-auto  my-4 py-4">
            <h5 className={`ghostText font-bold text-2xl text-6xl ml-10`}>404 - there's nothing here</h5>
            <button onClick={ () => navigate(`/`) } className="DBS_button_standard hover:bg-gray-400 ml-10 mt-5">
                <span className={`text-gray-700`}>Home</span>
            </button>
        </div>
    );
}

export default NotFound;
