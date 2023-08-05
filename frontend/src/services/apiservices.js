import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const createExpence = async (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  await client
    .post("/create-expence", JSON.stringify(data), { headers })
    .then((response) => {
      console.log("Success ========>", response);
    })
    .catch((error) => {
      console.log("Error ========>", error);
    });
};

export const getExpence = async (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return await client
    .get("/get-expences", { headers })
    .then((response) => {
      console.log("Responce", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error ========>", error);
    });
};

export const deleteExpence = async (req) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return await client
    .post("/delete-expences", req, { headers })
    .then((response) => {
      console.log("Responce", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error ========>", error);
    });
};

export const editExpence = async (req) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return await client
    .post("/edit-expences", req, { headers })
    .then((response) => {
      console.log("Responce", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error ========>", error);
    });
};
