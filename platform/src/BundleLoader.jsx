import React, { Suspense, lazy } from "react";
import useDynamicScript from "./useDynamicScript";

const SCOPE = "bundleApp"; // The configuration of the application should use the same name
const MODULE = "App"; // The configuration of the application should use the same name

// This function is like the official example https://webpack.js.org/concepts/module-federation/#dynamic-remote-containers
const loadComponent = (scope, module) => async () => {
  // eslint-disable-next-line
  await __webpack_init_sharing__("default");
  const container = window[scope];
  // eslint-disable-next-line
  await container.init(__webpack_share_scopes__.default);
  const factory = await window[scope].get(module);
  const Module = factory();
  return Module;
};

// This component mounts the component from the bucket
const BundleLoader = ({ url }) => {
  const { ready, failed } = useDynamicScript({ url });

  if (!url) return null;
  if (!ready) return <div>Loading...</div>;
  if (failed) return <div>Error</div>;

  const Component = lazy(loadComponent(SCOPE, MODULE));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default BundleLoader;
