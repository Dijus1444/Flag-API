const container = document.getElementById("container");
const input = document.getElementById("input");
const button = document.getElementById("button");

const getCountry = async (event) => {
    event.preventDefault();
    let inputValue = input.value.trim();

    if (inputValue === "") {
        alert("Please enter a country name or fragment.");
        return;
    }

    // Clear
    container.innerHTML = "";

    try {
        const result = await fetch(`https://restcountries.com/v3.1/name/${inputValue}`);
        

        if (!result.ok) {
            throw new Error("No countries found");
        }

        const data = await result.json();

        if (data.length === 0) {
            container.innerHTML = "<p>No countries found matching your search.</p>";
            return;
        }

        data.forEach(country => {
            const countryDiv = document.createElement("div");
            countryDiv.classList.add("country");
            console.log(country);

            // Flag
            const flag = document.createElement("img"); 
            flag.src = country.flags.svg; //
            flag.alt = `${country.name.common} Flag`;
            flag.style.width = "100px";
            countryDiv.appendChild(flag);

            // Name
            const countryName = document.createElement("h2");
            countryName.textContent = country.name.common;
            countryDiv.appendChild(countryName);

            // Capital
            const capital = document.createElement("p");
            capital.textContent = `Capital: ${country.capital ? country.capital[0] : "Not correct"}`;
            countryDiv.appendChild(capital);

            container.appendChild(countryDiv);
        });
    } catch (error) {
        console.error(error);
        container.innerHTML = "<p>No countries found or an error occurred. Please try again.</p>";
    }
};

button.addEventListener("click", getCountry);
