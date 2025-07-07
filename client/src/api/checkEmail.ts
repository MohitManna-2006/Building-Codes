export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const response = await fetch(`/api/waitlist/check/${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to check email existence");
    }

    const data = await response.json();
    return data.exists;
  } catch (error) {
    console.error("Error checking email existence:", error);
    return false; // Default to false to allow signup if check fails
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const response = await fetch("/api/waitlist/count", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get waitlist count");
    }

    const data = await response.json();
    return data.count;
  } catch (error) {
    console.error("Error getting waitlist count:", error);
    return 0;
  }
} 