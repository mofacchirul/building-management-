import { useQuery } from 'react-query';
import PublicAxios from '../../Hook/PublicAxios/PublicAxios';

const useApartment = (debouncedSearch) => {
    const axios = PublicAxios();
   const {data : apartment,isLoading:loding,}= useQuery({
queryKey: ['apartment',debouncedSearch],

    queryFn: async ()=>{
        const res= await axios.get(`/apartment?debouncedSearch=${debouncedSearch}`);
       
        return res.data
    }
    
},
{
    enabled: !!debouncedSearch || debouncedSearch === '', 
  }
);

return [apartment,loding,debouncedSearch];
}
export default useApartment
