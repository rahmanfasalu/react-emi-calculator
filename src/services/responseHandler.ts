// Success handler
export async function handleResponse(response: any) {
  if (response.status === 200) return response.data;
  if (response.status === 400) {
    // const error = await response.text();
    throw new Error("server error");
  }
  throw new Error("Network response was not ok.");
}

// Error Handler. In a real app, would likely call an error logging service.
export function handleError(error: any) {
  throw error;
}
