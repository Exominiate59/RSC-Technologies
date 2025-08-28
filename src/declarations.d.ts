// Pour que TS comprenne les fichiers .jsx
declare module "*.jsx" {
  import React from "react";
  const component: React.FC<any>;
  export default component;
}

// Pour que TS comprenne exactement ton App.jsx
declare module "./App";

// Pour éviter les erreurs avec les imports .css
declare module "*.css";