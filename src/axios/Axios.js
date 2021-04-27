import axios from "axios"
import { useEffect } from "react"

const Axios = () => {

  useEffect(() => {
    getData()
    // axios.get("url").then(res => res.data).then(res => console.log(res)).catch(err => console.log(err))
    // fetch.get("url").then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
  }, [])

  const getData = async () => {
    try {
      const res = await axios.get("url")

    } catch(err) {
      console.log(err)
    }
  }
  return <div>Hello</div>
}