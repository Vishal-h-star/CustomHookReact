import React, { useState, useEffect, useCallback } from "react";
import { use } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        // lets try this
        try {
            setLoading(true);
            setError(null);

            const responce = await fetch(url);
            if (!responce.ok) {
                throw new Error(`"HTTP erore status !" ${responce.status}`)
            }

            const result = await responce.json();

            setData(result)

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false)
        }

    }, [url])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

  return { data ,loading ,error};
}

export default useFetch