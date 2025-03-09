// GETTING DATA FROM SESSION STORAGE //
const customer: User = JSON.parse(sessionStorage.getItem("loggedInCustomer") || '{}')
console.log(customer);
window.onload = () => {
    // RENEDRING //
    const profileFullName = document.getElementById("profileFullName") as HTMLElement;
    const profileEmail = document.getElementById("profileEmail") as HTMLElement;
    const profilePhone = document.getElementById("profilePhone") as HTMLElement;
    const profileAddress = document.getElementById("profileAddress") as HTMLElement;
    const profileRole = document.getElementById("profileRole") as HTMLElement;
    const profileCompName = document.getElementById("profileCompName") as HTMLElement;
    const profileCompWeb = document.getElementById("profileCompWeb") as HTMLElement;
    const aCompanyWebsite = document.getElementById("companyWebSite") as HTMLAnchorElement
    if (Object.keys(customer).length == 0) {
        window.location.href = "index.html";
    } else {
        // RENDERING DATA //
        profileFullName.textContent = customer.first_name + " " + customer.last_name;
        profileEmail.textContent = customer.email;
        profilePhone.textContent = customer.phone;
        profileAddress.textContent =
            customer.address.hnumber +
            ", " +
            customer.address.street +
            ", " +
            customer.address.city +
            ", " +
            customer.address.pincode;
        profileCompName.textContent = customer.company.companyname;
        profileRole.textContent = customer.company.role;
        profileCompWeb.textContent =
            customer.company.companywebsite;
        aCompanyWebsite.href = customer.company.companywebsite;
    }
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
    DOMInstance.EditCustomer(customer)
)

const handleCustomerDelete = (event: Event) => {
    DOMInstance.HandleCustomerDelete(event, customer.id)
}
