"use client";
import { use, useEffect, useState } from "react";
import axios from "axios";
import utils from "../utils/utils";
function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const datax = await axios.get(
        "https://63ac56b4da81ba97618168d2.mockapi.io/user"
      );
      setData(datax.data);
      // setLoading(true)
    } catch (error) {
      setData(error);
    }
  };
  const start = () => {
    setLoading(!loading);
    if (loading) getData();
  };

  // console.log(data)
  return (
    <div className="border border-2 border-black px-4 h-screen">
      <form
        action="/api/hello"
        className="mt-10 border border-2 border-black rounded-xl mx-auto mx-w-xl p-4 gap-10 flex flex-col justify-center items-center"
      >
        <input type="text" name="nama" className={utils.input} />
        {/* <input type="email" name="email" id="" className={utils.input} /> */}
        <button type="submit" className={utils.button}>
          send
        </button>
      </form>
      <div>
        <button
          className="bg-sky-500 px-4 py-2 mt-6 rounded-xl"
          onClick={start}
        >
          Load Data
        </button>
        {loading ? (
          data.map((res) => <h1 key={res.id}>{res.name}</h1>)
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
}

export default Page;
