import axios from "axios";

const apiURL = "https://edge.savoie.misitioba.com";
const namespace = `imptfc`;

export async function call(name, args = {}, transform = "", options) {
  let r = (await axios.post(`${apiURL}/funql-api?name=${name}`, {
    namespace,
    name,
    args,
    transform: transform.toString(),
    ...options
  })).data;

  return r;
}
