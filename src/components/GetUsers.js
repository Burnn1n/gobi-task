import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useLazyQuery, useMutation } from '@apollo/client';
import { productAll } from "../components/graphql/query";

function GetUsers() {
  const { error, loading, data } = useQuery(productAll);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.products.edges);
			console.log(data, "fetch okay");
    }
  }, [data]);
	console.log(users);
  return (
    <div>
       {" "}
      {users.length > 0 && users.map((val) => {
        return (
        <h1> {val.node.handle} {val.node.id}</h1>
        );
      })}
    </div>
  );
}

export default GetUsers;