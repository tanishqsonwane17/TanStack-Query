import axios from "axios";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("https://fakestoreapi.com/users").then((res)=>{
        console.log(res.data)
        return res.data
    }).catch((err)=>{
        console.log(err)
    }),
    staleTime: 10000
  });   

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
