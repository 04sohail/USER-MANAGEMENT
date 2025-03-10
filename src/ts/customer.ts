const customerDOMInstance = new DOM();
const customerEditFields: HTMLInputElement[] = Array.from(document.getElementsByClassName("editUser")) as HTMLInputElement[];
const customerValidation = new Validation();
const customerAPIInstance = new APIService()

// GETTING DATA FROM SESSION STORAGE //
const customer: User = JSON.parse(sessionStorage.getItem("loggedInCustomer") || '{}')
const profileFullName = document.getElementById("profileFullName") as HTMLElement;
const profileEmail = document.getElementById("profileEmail") as HTMLElement;
const profilePhone = document.getElementById("profilePhone") as HTMLElement;
const profileAddress = document.getElementById("profileAddress") as HTMLElement;
const profileRole = document.getElementById("profileRole") as HTMLElement;
const profileCompName = document.getElementById("profileCompName") as HTMLElement;
const profileCompWeb = document.getElementById("profileCompWeb") as HTMLElement;
const aCompanyWebsite = document.getElementById("companyWebSite") as HTMLAnchorElement


window.onload = () => {
    // RENEDRING //
    customerDOMInstance.RenderCustomer()
    // LOGOUT //
    const customerLogOut = document.querySelector(".customer-log-out") as HTMLButtonElement;
    customerLogOut.addEventListener("click", () => handlecustomerLogout());
    function handlecustomerLogout() {
        sessionStorage.removeItem("loggedIncustomer");
        window.location.href = "index.html";
    }
}

const editCustomer = document.querySelector(".customer-edit")
editCustomer?.addEventListener("click", (event) =>
    customerDOMInstance.EditCustomer(customer)
)

const handleCustomerDelete = (event: Event) => {
    customerDOMInstance.HandleCustomerDelete(event, customer.id)
}

// UPDATE CUSTOMER //
const updateCustomer = (event: Event): void => {
    debugger
    customerDOMInstance.UpdateCustomer(event, customer.id)
}


// EDIT WARNINGS //
const customerEditFnameWarning = document.querySelector(".edit-fname-warning") as HTMLDivElement;
const customerEditLnameWarning = document.querySelector(".edit-lname-warning") as HTMLDivElement;
const customerEditEmailWarning = document.querySelector(".edit-email-warning") as HTMLDivElement;
const customerEditPhoneWarning = document.querySelector(".edit-phone-warning") as HTMLDivElement;
const customerEditHNumberWarning = document.querySelector(".edit-HNumber-warning") as HTMLDivElement;
const customerEditStreetWarning = document.querySelector(".edit-street-warning") as HTMLDivElement;
const customerEditCityWarning = document.querySelector(".edit-city-warning") as HTMLDivElement;
const customerEditPinCodeWarning = document.querySelector(".edit-pin-code-warning") as HTMLDivElement;
const customerEditCompanyNameWarning = document.querySelector(".edit-company-name-warning") as HTMLDivElement;
const customerEditCompanyWebWarning = document.querySelector(".edit-company-web-warning") as HTMLDivElement;
const customerEditPasswordWarning = document.querySelector(".edit-password-warning") as HTMLDivElement;
const customerEditConfirmPasswordWarning = document.querySelector(".edit-confirm-password-warning") as HTMLDivElement;

const customerAllEditWarning = document.querySelectorAll(".empty-required") as NodeListOf<HTMLDivElement>;

const validateCustomerUpdateEmptyField = (): boolean => {
    return customerValidation.ValidateEmptyField(customerEditFields, customerAllEditWarning)
};

// UPDATE BLUR VALIDATION //
const customerValidateUpdateEmptyField = (): boolean => {
    return customerValidation.ValidateEmptyField(customerEditFields, customerAllEditWarning)
};


customerEditFields[0].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditFnameWarning, customerEditFields[0]));
customerEditFields[1].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditLnameWarning, customerEditFields[1]));
customerEditFields[2].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditEmailWarning, customerEditFields[2]));
customerEditFields[3].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditPhoneWarning, customerEditFields[3]));
customerEditFields[4].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditHNumberWarning, customerEditFields[4]));
customerEditFields[5].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditStreetWarning, customerEditFields[5]));
customerEditFields[6].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditCityWarning, customerEditFields[6]));
customerEditFields[7].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditPinCodeWarning, customerEditFields[7]));
customerEditFields[8].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditCompanyNameWarning, customerEditFields[8]));
customerEditFields[9].addEventListener("blur", (event) => customerValidation.OnBlurValidate(event, customerEditCompanyWebWarning, customerEditFields[9]));
// UPDATE INPUT VALIDATION //
customerEditFields[0].addEventListener("input", (event) => customerValidation.OnInputValidateName(event, /^[A-Za-z\s]{1,15}$/, customerEditFnameWarning));
customerEditFields[1].addEventListener("input", (event) => customerValidation.OnInputValidateName(event, /^[A-Za-z\s]{1,15}$/, customerEditLnameWarning));
customerEditFields[2].addEventListener("input", (event) => customerValidation.OnInputValidateEmail(event, /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, customerEditEmailWarning));
customerEditFields[3].addEventListener("input", (event) => customerValidation.OnInputValidatePhone(event, /^[6789]{1}\d{9}$/, customerEditPhoneWarning));
customerEditFields[4].addEventListener("input", (event) => customerValidation.OnInputValidateHNumber(event, /^[A-Za-z0-9]+(?:[-/#\s][A-Za-z0-9]+){0,29}$/, customerEditHNumberWarning));
customerEditFields[5].addEventListener("input", (event) => customerValidation.OnInputValidateStreet(event, /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/, customerEditStreetWarning));
customerEditFields[6].addEventListener("input", (event) => customerValidation.OnInputValidateCity(event, /^[a-zA-Z]+(?:[\s.-][a-zA-Z]+)*$/, customerEditCityWarning));
customerEditFields[7].addEventListener("input", (event) => customerValidation.OnInputValidatePinCode(event, /^[1-9][0-9]{5}$/, customerEditPinCodeWarning));
customerEditFields[8].addEventListener("input", (event) => customerValidation.OnInputValidateCompanyName(event, /^[a-zA-Z0-9]+(?:[\s&.,'-][a-zA-Z0-9]+)*(?:\s(Ltd\.|Pvt\.|Private|LLP|Inc\.|Corporation|Company))?$/, customerEditCompanyNameWarning));
customerEditFields[9].addEventListener("input", (event) => customerValidation.OnInputValidateCompanyWeb(event, /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,10}(\/[a-zA-Z0-9-]*){0,50}\/?$/, customerEditCompanyWebWarning));
