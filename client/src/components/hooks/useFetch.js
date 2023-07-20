import { useState } from "react";

const useFetch = () => {

    const [data, setData] = useState({});

    const fetchData = async (location) => {
        fetch(`http://localhost:8000/weathers/send/${location}`)
          .then((res) => res.json())
          .then((data) => {console.log(data); setData(data)})
          .catch((err) => console.log(err));
    };

    return [data, fetchData];
};

export default useFetch;  