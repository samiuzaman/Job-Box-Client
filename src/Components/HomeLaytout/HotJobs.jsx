import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
      {jobs.map((job) => (
        <HotJobCard key={job._id} job={job}></HotJobCard>
      ))}
    </div>
  );
};

export default HotJobs;
