(function () {
    let newUsersList = document.querySelector('.new-users-list');

    const userForm = document.querySelector(".new-user-form");


    userForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    
    isFormValid = true;

    const { elements } = e.target;
    const usernameElement = elements.username;
    const cityElement = elements.city;
    const provinceElement = elements.province;
    
    const username = usernameElement.value;
    const city = cityElement.value;
    const province = provinceElement.value;
    
    if(!hasWhiteSpace(username) && isValueNotEmpty(username)) {
        usernameElement.classList.remove("is-invalid");
    }
    else {
        usernameElement.classList.add("is-invalid");
    }

    if(!hasWhiteSpace(city) && isValueNotEmpty(city)) {
        cityElement.classList.remove("is-invalid");
    }
    else {
        cityElement.classList.add("is-invalid");
    }

    if(!hasWhiteSpace(province) && isValueNotEmpty(province)) {
        provinceElement.classList.remove("is-invalid");
    }
    else{
        provinceElement.classList.add("is-invalid");
    }

    if(isFormValid){
        addUser(username, city, province);

        userForm.reset();
    }
    

    });

    // the isValueNotEmpty function: 
    // returns true if value not empty
    // returns false if the value is empty
    function isValueNotEmpty(value) {
        if (value !== '') {
            return true;
        }
        return false;
    }

    // the hasWhiteSpace function
    // returns true if s has whitespace
    // returns false if s does not have whitespace
    function hasWhiteSpace(s) {
        return (/\s/).test(s);
    }

    // adds user to the page.
    function addUser(username, city, province) {
        let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${username}</div>
                ${city}, ${province}
            </div>
            </li>`;
        newUsersList.innerHTML = newUsersList.innerHTML + newUser;
    }
})();