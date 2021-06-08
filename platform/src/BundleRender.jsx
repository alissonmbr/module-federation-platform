import React from "react";
import { useParams } from "react-router-dom";
import BundleLoader from "./BundleLoader";

const BUCKET_URL = "http://localhost:5000"; // Simulates a bucket url

const BundleRender = () => {
  const { id } = useParams();
  const url = `${BUCKET_URL}/${id}/remoteEntry.js`;

  return (
    <div>
      <BundleLoader url={url} />
    </div>
  );
};

export default BundleRender;
