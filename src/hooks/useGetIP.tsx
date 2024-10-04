import { useState, useEffect } from "react";

/**
 * @function useGetIP
 * @async
 * @description Gets the client IP address
 * @returns {Promise<Object, boolean>} A Promise containing the IP address
 */
const useGetIP = () => {

    const url = "https://api.ipify.org/?format=json";

    const [loading, setLoading] = useState(false);
    const [IPAddress, setIPAddress] = useState("");
    
    useEffect(() => {
        const getWeather = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const json = await response.json();

                console.log("IP: " + json.ip);
                setIPAddress(json.ip);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message)
                    setIPAddress("test");
                }
            } finally {
                setLoading(false);
            }
        };

        getWeather();
    }, []);

    return { loading, IPAddress };
}

export default useGetIP;