import { useEffect, useState } from "react";
import axios from "axios";

function AxiosExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Erro ao buscar API:", error));
  }, []);

  return (
    <div>
      <h1>Dados da API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default AxiosExample;
