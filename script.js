const container = document.getElementById("container");
const input = document.getElementById("input");
const button = document.getElementById("button");
 
const getCountry = async (event) => {
    event.preventDefault();
    let inputValue = input.value.trim();
    console.log(inputValue);
 
   
    const result = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
    console.log(result);
 
 
    const data = await result.json();
    document.createElement("h1")
    console.log(data);
};
 
button.addEventListener("click", getCountry);   