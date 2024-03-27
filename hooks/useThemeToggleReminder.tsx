import { useEffect } from "react";
import { toast } from "react-hot-toast";

interface ReminderProps {
  message: string;
  icon: string;
  delay: number;
}

export function useThemeToggleReminder({
  message,
  icon,
  delay,
}: ReminderProps): void {
  useEffect(() => {
    if (!sessionStorage.getItem("toggleThemeToastShown")) {
      const timer = setTimeout(() => {
        toast(message, {
          icon: icon,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        sessionStorage.setItem("toggleThemeToastShown", "true");
      }, delay);

      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, [message, delay, icon]);
}
