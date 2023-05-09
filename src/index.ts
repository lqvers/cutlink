import axios from "axios";
import cheerio from "cheerio";

type ShortenerSource =
  | "tinyurl.com"
  | "is.gd"
  | "1pt.co"
  | "clck.ru"
  | "v.gd"
  | "da.gd"
  | "shrtco.de"
  | "9qr.de"
  | "zws.im";

export class Shortener {
  private source: ShortenerSource;

  constructor(source: ShortenerSource) {
    this.source = source;
  }

  async new(url: string) {
    if (this.source == "1pt.co") {
      let res = await axios.get(
        `https://csclub.uwaterloo.ca/~phthakka/1pt/addURL.php?url=${url}`
      );

      return `https://1pt.co/${res.data.short}`;
    } else if (this.source == "is.gd") {
      let res = await axios.request({
        method: "GET",
        url: "https://is.gd/create.php",
        params: { url: "https://google.com/" },
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=---011000010111000001101001",
        },
        data: '-----011000010111000001101001\r\nContent-Disposition: form-data; name="url"\r\n\r\nhttps://roblox.com\r\n-----011000010111000001101001--\r\n',
      });

      let $ = cheerio.load(res.data);
      let $res = $("#short_url").attr("value");

      return $res;
    } else if (this.source == "tinyurl.com") {
      let res = await axios.get(`http://tinyurl.com/api-create.php?url=${url}`);

      return `${res.data}`;
    } else if (this.source == "clck.ru") {
      let res = await axios.post(`https://clck.ru/--?url=${url}`);

      return `${res.data}`;
    } else if (this.source == "v.gd") {
      let res = await axios.post(
        `https://v.gd/create.php?format=simple&url=${url}`
      );

      return `${res.data}`;
    } else if (this.source == "da.gd") {
      let res = await axios.post(`https://da.gd/s?url=${url}`);

      return `${res.data}`;
    } else if (this.source == "shrtco.de") {
      let res = await axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`);

      return `${res.data.result.full_short_link}`;
    } else if (this.source == "9qr.de") {
      let res = await axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`);

      return `${res.data.result.full_short_link2}`;
    } else if (this.source == "zws.im") {
      let res = await axios.request({
        method: "POST",
        url: "https://api.zws.im/",
        headers: { "Content-Type": "application/json" },
        data: { url: url },
      });

      return `${res.data.url}${res.data.short}`;
    }
  }
}
