import { useContext } from "react";

import { useQuery } from "react-query";
import { AuthContext } from "../Provider/Provider";
import SecureAxioc from "../Hook/SecureAxios";


const Useadmin = () => {
    const {user,loding}=useContext(AuthContext);
    const axios = SecureAxioc();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loding,
        queryFn: async () => {
            
            const res = await axios.get(`/users/admin/${user.email}`);
           
            return res.data?.admin;
        }
    })
return [isAdmin,isAdminLoading]
};


export default Useadmin;






