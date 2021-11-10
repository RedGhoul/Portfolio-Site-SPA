import axios from "axios";
import config from '../config/config';
const Get = () => {
    return axios.get("https://www.somethingsblog.com/wp-json/wp/v2/posts");
};

export default Get;
