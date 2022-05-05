import axios from "axios";
import  funql  from "funql-api/client.cjs";
const apiURL = import.meta.env.VITE_FUNQL_ENDPOINT;
const fql = funql(import.meta.env.VITE_FUNQL_ENDPOINT,{
  //namespace:"imptfc"
})

export default fql;

export async function post(url,data){
  if(url.charAt(0)==='/'){
    url= url.substring(1)
  }
  return axios.post(apiURL+'/'+url,data)
}

export async function get(url,data = {}){
  if(url.charAt(0)==='/'){
    url= url.substring(1)
  }
  let qs = Object.keys(data).map(key=>(`${key}=${data[key]}`)).join('&')
  if(url.indexOf('?')!==-1){
    url+= '&'+qs
  }else{
    url+='?'+qs
  }
  return axios.get(apiURL+'/'+url)
}

