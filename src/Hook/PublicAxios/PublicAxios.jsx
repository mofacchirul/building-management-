import axios from "axios";

 const Axioscreate = axios.create(
   {
    baseURL: 'https://assignment-12-serside.vercel.app',
    
   }
)
const PublicAxios = () => {
    return Axioscreate
};

export default PublicAxios;

