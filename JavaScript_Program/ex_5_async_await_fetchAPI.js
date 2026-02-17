//Create a fetch API call to retrieve data from a REST API endpoint 
// using async/await syntax with proper error handling.

const fetchUserInfo = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

};
fetchUserInfo();

