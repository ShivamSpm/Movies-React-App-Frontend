import axios from "axios";

export default axios.create({
    baseURL: 'https://movies-spring-boot-project-production.up.railway.app/',
    headers: {"Access-Control-Allow-Origin": "*"}
});