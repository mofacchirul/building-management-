import axios from "axios";

 const Axioscreate = axios.create(
   {
    baseURL: 'http://localhost:4000',
    
   }
)
const PublicAxios = () => {
    return Axioscreate
};

export default PublicAxios;

