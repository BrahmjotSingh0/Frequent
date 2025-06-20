import { API_URL } from "./api";
import { useState, useEffect } from "react";

export function useUsernameAvailability(username) {
  const [available, setAvailable] = useState(null); // null = not checked, true = available, false = taken
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    if (!username || username.length < 4) {
      setAvailable(null);
      return;
    }
    let ignore = false;
    setChecking(true);
    const timeout = setTimeout(() => {
      fetch(`${API_URL}/profile/${username}`)
        .then(res => {
          if (ignore) return;
          setAvailable(res.status === 404);
        })
        .catch(() => {
          if (ignore) return;
          setAvailable(null);
        })
        .finally(() => {
          if (!ignore) setChecking(false);
        });
    }, 500); // debounce
    return () => {
      ignore = true;
      clearTimeout(timeout);
    };
  }, [username]);

  return { available, checking };
}
