import http from "../http-common";
const upload = (file) => {
    const data=new FormData()
    data.append("file",file)
   return http.post("/", data).then(res => console.log(res)).catch(err=> console.warn(err));
};
export default {
    upload
}