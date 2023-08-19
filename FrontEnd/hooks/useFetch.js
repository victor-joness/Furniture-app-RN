import {View, Text} from "react-native";
import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://10.0.2.2:3001/api/products");
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setError(error);
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return {data, loading, error, refetch};
};

export default useFetch;