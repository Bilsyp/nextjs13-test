// Next.js API route support: https://nextjs.org/docs/api-routes/introductioan
import axios from "axios";
import { request } from "http";
import path from "path";
async function post({ nama, email }) {
  // console.log(email);
  try {
    await axios.post("https://63ac56b4da81ba97618168d2.mockapi.io/user", {
      name: nama,
    });
  } catch (error) {}
}
const getData = async () => {
  try {
    const data = await axios.get(
      "https://63ac56b4da81ba97618168d2.mockapi.io/user"
    );
    const result = data.data;

    return result;
  } catch (error) {}
};
export default async function handler(req, res) {
  const { status } = res;
  const { method, query } = req;
  const result = await getData();
}

function ambilData(data) {
  // const ios = data
}
