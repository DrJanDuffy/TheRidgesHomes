import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize Homebot script
const initHomebot = () => {
  const w = window as any;
  (function (h, b) {
    w['__hb_namespace'] = h;
    w[h] = w[h] || function () {
      (w[h].q = w[h].q || []).push(arguments)
    };
    const y = document.createElement('script');
    const x = document.getElementsByTagName('script')[0];
    y.async = 1;
    y.src = b;
    x.parentNode?.insertBefore(y, x);
  })('Homebot', 'https://embed.homebotapp.com/lgw/v1/widget.js');
};

// Initialize Homebot when the app loads
initHomebot();

createRoot(document.getElementById("root")!).render(<App />);
