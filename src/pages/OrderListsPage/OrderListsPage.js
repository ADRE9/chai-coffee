import { useEffect,useState } from 'react';
import axios from 'axios';

function OrderListsPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const getAllOrder = async () => {
    setIsLoading(true);
    const res = await axios.get('http://localhost:8080/orders');
    console.log(res);
    setIsLoading(false);
    // setOrders(res.data)
  }

  useEffect(() => {
    getAllOrder();
  }, []);

  if(isLoading===null||isLoading ===true)


  return ( <p>Orders List Page</p> );
}

export default OrderListsPage;