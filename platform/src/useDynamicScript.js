import { useEffect, useState } from "react";

// Hook for loading the application from the bucket
const useDynamicScript = ({ url }) => {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!url) {
      return undefined;
    }

    const element = document.createElement("script");

    element.id = "dynamic-bundle";
    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`[BundleLoader] loaded: ${url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`[BundleLoader] error: ${url}`);
      setReady(true);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`[BundleLoader] removed: ${url}`);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    failed,
  };
};

export default useDynamicScript;
