import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useQueryCreateManga = () => {
  const queryClient = useQueryClient();

  async function createManga(file) {
    const formData = new FormData();
    formData.append("fileData", file);

    return axios
      .post("/api/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log("Успешно загруженно"))
      .catch(() => console.log("Ошибка при згрузке"));
  }

  return useMutation((newProduct) => createManga(newProduct), {
    onSuccess: () => queryClient.invalidateQueries(["manga"]),
    onError: () => console.log("ERROR UPLOAD IMAGE"),
  });
};
