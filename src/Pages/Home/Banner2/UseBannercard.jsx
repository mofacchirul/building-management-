
import PublicAxios from '../../../Hook/PublicAxios/PublicAxios';
import { useQuery } from 'react-query';
const UseBannercard = () => {
const axios= PublicAxios();


const {data : banners,isLoading:loding,}= useQuery({
    queryKey: ['banner'],
    queryFn: async ()=>{
        const res= await axios.get('/banner');
        return res.data
        
    }
})

return [banners,loding]
     
};

export default UseBannercard;




