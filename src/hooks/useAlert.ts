import { useCallback } from "react"

export const useAlert = () => {
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, [])

  const showConform = useCallback((message: string, onConform: () => void) => {
    if (window.confirm(message)){
        onConform();
    }
  }, []);

  return {showAlert, showConform};
}
