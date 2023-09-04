import axios from 'axios';
import { useEffect, useState, useCallback } from 'react'

const useFetchData = (urlData) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(
        async (params) => {
            try {
                const url = (params || urlData);
                setLoading(true);
                const res = await axios.get(
                    process.env.REACT_APP_API_URL + url,
                    {
                        headers: {
                            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                        },
                    }
                );
                setData(res.data.data);
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
        },
        [urlData],
    )



    useEffect(() => {
        fetchData();
    }, [fetchData])

    return { data, loading, fetchData };

}

export default useFetchData; 