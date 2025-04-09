import axiosInstance from "./axiosInstance";

export const fetchPosts = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    console.log("data fetch", response.data);
    return response.data;
  } catch (err) {
    console.log("Error occurred", err);
    throw new Error(err);
  }
};

// export default fetchPosts;
