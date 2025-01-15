import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const handleOffline = () => {
      setOnlineStatus(false);
    };
    const handleOnline = () => {
      setOnlineStatus(true);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Use effect we will take because hame sirf 1 bar hi chaiye, and event listner use hua hai
    // so we have to remove that

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
