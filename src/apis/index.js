import axios from "axios"

const KEY = "AIzaSyCTjAoR_o_7-AY7yjQjC4IP9JjFPPTACYY"

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

const fetchPopularData = async () => {
  return await youtube.get("/videos", {
    params: {
      part: "snippet",
      macResults: 40,
      key: KEY,
      regionCode: "JP",
      type: "video",
      chart: "mostPopular"
    }
  })
}

export {fetchPopularData};