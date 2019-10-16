import axios from "axios";

const apiURL = "https://pink-cougar-88.localtunnel.me";
const namespace = `imptfc`;

export async function call(name, args = {}, transform = "", options) {
  let r = (await axios.post(`${apiURL}/funql-api?name=${name}`, {
    namespace,
    name,
    args,
    transform: transform.toString(),
    ...options
  })).data;
  console.log("api call", name, "response is", r);
  return r;
}

export async function savePlayerSlot(data) {
  console.log(
    await axios.post(`${apiURL}/funql-api`, {
      name: "savePlayerSlot",
      args: [data],
      namespace
    })
  );
}
