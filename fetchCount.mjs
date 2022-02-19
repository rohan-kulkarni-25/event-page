import fetch from "node-fetch";

const fetchCount = async (event) => {
  let count = "";
  const id = event.yt_id;
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${process.env.KEY}`;
  const data = fetch(`${url}`)
    .then((data) => data.json())
    .then((data) => {
      let count = data.items;
      count = count[0].statistics;
      count = count.viewCount;
    });
  return count;
};

export default fetchCount;
