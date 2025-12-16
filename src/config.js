  // const BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;

  const BACKEND_URL = "http://localhost:8080";

  // const BACKEND_URL = "http://a8a6fc24784af4b6192865f084e22c47-1082690188.eu-central-1.elb.amazonaws.com";
  
const admin_pwd = "Admin@12345"; // VULNERABILITY #1: A01:2021 - Broken Access Control - Hardcoded Credentials

  export { BACKEND_URL };