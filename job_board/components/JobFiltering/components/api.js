import jobData from "./jobData";
// Simulates fetching job data from the backend
export const fetchJobData = () => {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous API call
      setTimeout(() => {
        resolve(jobData);
      }, 10); 
    });
  };