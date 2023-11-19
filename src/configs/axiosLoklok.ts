import axios from "axios";
import { randomDeviceId } from "utils/helper";

// Thanks to hexated
// https://github.com/hexated/cloudstream-extensions-hexated/blob/5da078d17002e6b226a970045cb5316899f438b3/Loklok/src/main/kotlin/com/hexated/Loklok.kt
const baseHeaders = {
  lang: "vi",
  versioncode: "57",
  clienttype: "android_Official",
  "Content-Type": "application/json",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36 OPR/84.0.4316.52"
};

const axiosLoklok = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
  headers: {
    ...baseHeaders,
    currentTime: new Date().getTime(),
    deviceid: randomDeviceId(16)
  }
});

axiosLoklok.interceptors.request.use(
  async (config) => {
    const customConfig = {
      ...config,
      headers: {
        ...baseHeaders,
        deviceid: randomDeviceId(16)
      }
    };
    return customConfig;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosLoklok.interceptors.response.use(
  async (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  async (error) => {
    const { response } = error;
    const errorResult = { ...response?.data, status: response?.status };
    return Promise.reject(errorResult);
  }
);

export default axiosLoklok;
