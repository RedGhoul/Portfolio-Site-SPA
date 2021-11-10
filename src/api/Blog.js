import axios from "axios";
const Get = () => {
    return axios.get("https://www.somethingsblog.com/wp-json/wp/v2/posts");
};

export default Get;
