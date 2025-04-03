import axios from "axios";

const baseUrl = "https://6roa5y2ufh.execute-api.us-east-1.amazonaws.com/api";

export async function submitLeadStatus(token: string, status: string, feedback: string, selections: string[]) {
  try {
    const response = await axios.post(
        `${baseUrl}?token=${token}&status=${status}`,
        {feedback,selections},
        {headers: {"Content-Type": "application/json"}}
    );
    console.log("Success:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error submitting lead status:", error.response?.data || error.message);
    throw error;
  }
}