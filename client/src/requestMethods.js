import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTE5MGMwNzViNzBiNTcwZTFhOThlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODExMjQzOSwiZXhwIjoxNjU4MzcxNjM5fQ.Dg_PJQRmi93lOX6ezajx_OOGx_R_zvPnBFA492gqKEI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});