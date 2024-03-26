import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function useDarkModeReminder(message: string, delay: number) {
  useEffect(() => {
    if (!sessionStorage.getItem("darkModeToastShown")) {
      const timer = setTimeout(() => {
        toast(message, {
          icon: "🌙",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        sessionStorage.setItem("darkModeToastShown", "true");
      }, delay);

      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, [message, delay]);
}
