import axios from "axios";
import { useEffect, useState } from "react";

const Notice = () => {

    const [data, setData] = useState([]);

    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(response => {
            setData(response.data);
            console.log(data);
            
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2>공지 사항</h2>
            <input
                className="search"
                type="text"
                placeholder="제목 검색"
                onChange={(e)=> setSearchKeyword(e.target.value)}
            />
            
           <ul className="notice-list">
            <li key={data.id} className="notice-id">{data.title}</li>
           </ul>
        </div>
    )
}

export default Notice;