import axios from 'axios'

export default function ajax ({ url = "", data = {}, type = "GET" }) {

  return new Promise(function (resolve, reject) {

    let Promise

    if (type === "GET") {
      let dataStr = "" //拼接好的字符串
      object.key(data).forEach(key => {
        dataStr += key + "=" + data[key] + '&'
      });
      if (dataStr !== "") {
        dataStr = dataStr.substring(0, lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get 请求
      promise = axios.get(url)
    } else {
      //发送post
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    }).
      cath(error => {
        reject(error)

      })
  })







}