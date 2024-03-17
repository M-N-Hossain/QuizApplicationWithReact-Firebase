import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useVideoList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      // database related works
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(videoQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          //
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    };

    fetchVideos();
  }, []);

  return {
    loading,
    error,
    videos,
  };
}