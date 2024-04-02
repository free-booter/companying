import { BASE_URL } from "../service/config";

export default function useGetFile(filename) {
  return `${BASE_URL}/common/download?name=${filename}`
}
