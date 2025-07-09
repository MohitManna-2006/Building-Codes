export async function saveLead(data: { name: string; company?: string; email: string }) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to save lead");
    }

    return await response.json();
  } catch (error) {
    console.error("Error saving lead:", error);
    throw error;
  }
}
