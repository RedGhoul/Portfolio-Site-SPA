import axios from "axios";
import config from '../config/config';


const Get = () => {
    return axios.get(config.baseURL + "api/experiences/public");
};

export default Get;
