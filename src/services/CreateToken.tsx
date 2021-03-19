import * as jwt from 'jsonwebtoken';


const useGetToken = () => jwt.sign({ app: 'customer', name:'whereisitapp', date:Date.now() }, 'whereisitcustomerapp');

export default useGetToken
