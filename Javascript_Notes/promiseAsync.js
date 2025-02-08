function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "John", age: 30 };
        resolve(data);
      }, 2000); // Simulating a 2-second API call delay
    });
  }
  
  fetchData()
    .then(data => {
      console.log("Data fetched:", data);
    })
    .catch(error => {
      console.log("Error fetching data:", error);
    });
  