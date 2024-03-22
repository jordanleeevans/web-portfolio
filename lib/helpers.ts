export const isValidString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string = "An error occurred";
  if (error instanceof Error) {
    message = error.message;
  }

  if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  }

  if (typeof error === "string") {
    message = error;
  }

  return message;
};
