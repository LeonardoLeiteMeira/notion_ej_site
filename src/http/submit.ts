import axios from "axios";

const baseUrl = "https://6roa5y2ufh.execute-api.us-east-1.amazonaws.com/api";

export async function submitLeadStatus(
  token: string,
  status: string,
  feedback: string,
  selections: string[]
) {
  try {
    const response = await axios.post(
      `${baseUrl}?token=${token}&status=${status}`,
      { feedback, selections },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("Success:", response.data);
    return response.data;
  } catch (error: unknown) {
    let errorMessage = "Error submitting lead status";
    if (error && typeof error === "object" && "response" in error) {
      const err = error as { response?: { data?: string }; message?: string };
      errorMessage = err.response?.data || err.message || errorMessage;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error("Error submitting lead status:", errorMessage);
    throw new Error(errorMessage);
  }
}