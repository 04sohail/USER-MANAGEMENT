window.onload = (event) => {

    // LOGIN // 
    const loginBtn = document.querySelector(".login-btn") as HTMLButtonElement
    const emailLogin = document.getElementById("emailLogin") as HTMLInputElement;
    const emailLoginWarning = document.querySelector(".check-email-warning") as HTMLDivElement
    const passwordLogin = document.getElementById("password") as HTMLInputElement;
    const passwordLoginWarning = document.querySelector(".check-password-warning") as HTMLDivElement;
    const submitForm = document.getElementById("submitForm") as HTMLFormElement;
    const allLoginField: HTMLInputElement[] = Array.from(document.getElementsByClassName("login-input")) as HTMLInputElement[];
    const allLoginWarnings = document.querySelectorAll(".empty-required") as NodeListOf<HTMLDivElement>;
    const loginForm = document.querySelector(".login-form") as HTMLFormElement;

    // LOGIN PAGE //
    emailLogin.addEventListener("blur", (event) => validation.OnBlurValidate(event, emailLoginWarning, emailLogin))
    passwordLogin.addEventListener("blur", (event) => validation.OnBlurValidate(event, passwordLoginWarning, passwordLogin))
    emailLogin.addEventListener("input", (event) => validation.OnInputValidateEmail(event, /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, emailLoginWarning))
    passwordLogin.addEventListener("input", (event) => validation.OnInputValidatePassword(event, passwordLoginWarning))
    const loginRegexValidate = (): boolean => {
        return validation.ValidateRegex(emailLogin, /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
            validation.ValidateRegex(passwordLogin, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/)
    }

    const validateLoginEmptyField = (): boolean => {
        return validation.ValidateEmptyLogin(allLoginField, allLoginWarnings)
    }

    loginBtn.addEventListener("click", (event) => handleSubmit(event as Event));
    const handleSubmit = async (event: Event): Promise<void> => {
        event.preventDefault();
        console.log("INSIDE HANDLE SUBMIt");
        if (validateLoginEmptyField() && loginRegexValidate()) {
            const API_RESPONSE = await APIInstance.GetSingleUser(`email=${encodeURIComponent(emailLogin.value)}&password=${encodeURIComponent(passwordLogin.value)}`);
            if (!API_RESPONSE) {
                alert("SORRY NO USER FOUND")
            }
            else {
                console.log("Customer found", API_RESPONSE[0]);
                if (API_RESPONSE[0].company.role === "customer") {
                    sessionStorage.setItem("loggedInCustomer", JSON.stringify(API_RESPONSE[0]));
                    window.location.href = "customer.html";
                } else if (API_RESPONSE[0].company.role === "super-admin") {
                    sessionStorage.setItem("loggedInSuperAdmin", JSON.stringify(API_RESPONSE[0]));
                    window.location.href = "super-admin.html";
                } else if (API_RESPONSE[0].company.role === "admin") {
                    sessionStorage.setItem("loggedInAdmin", JSON.stringify(API_RESPONSE[0]));
                    window.location.href = "admin.html";
                }
                else {
                    loginForm.style.height = "545px";
                    console.log("VALIDATION TRUE");
                    return
                }
            }
        }
    }


}