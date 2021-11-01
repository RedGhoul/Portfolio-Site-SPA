import axios from "axios";
import config from '../config/config';
const Get = () => {
    return axios.get(config.baseURL + "api/projects/public");
};

export default {
    Get
};
