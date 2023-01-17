import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const useRTDBRef = (config, path) => {
  const app = initializeApp(config);
  const db = getDatabase(app);
  return ref(db, path);
};

export default useRTDBRef;
