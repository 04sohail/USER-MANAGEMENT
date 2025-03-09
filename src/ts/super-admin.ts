
window.onload = (event) => {
    DOMInstance.RenderSuperAdmin(API_response);
    const deleteBtn = document.getElementById("deleteFormSubmit") as HTMLFormElement
    deleteBtn?.addEventListener("submit", (event) => DOMInstance.HandleDelete(event))
    // PROFILE //
    const superAdminUser = JSON.parse(sessionStorage.getItem("loggedInSuperAdmin") || '{}')
    if (Object.keys(superAdminUser).length == 0) {
        window.location.href = "index.html";
    } else {
        const profileEmail = document.getElementById("profileEmail") as HTMLElement;
        const profileFullName = document.getElementById("profileFullName") as HTMLElement;
        profileFullName.textContent = superAdminUser.first_name + " " + superAdminUser.last_name;
        profileEmail.textContent = superAdminUser.email;
        const profilePhone = document.getElementById("profilePhone") as HTMLElement;
        profilePhone.textContent = superAdminUser.phone;
        const profileAddress = document.getElementById("profileAddress") as HTMLElement;
        profileAddress.textContent =
            superAdminUser.address.hnumber +
            ", " +
            superAdminUser.address.street +
            ", " +
            superAdminUser.address.city +
            ", " +
            superAdminUser.address.pincode;
        const profileCompName = document.getElementById("profileCompName") as HTMLElement;
        profileCompName.textContent = superAdminUser.company.companyname;
        const profileRole = document.getElementById("profileRole") as HTMLElement;
        profileRole.textContent = superAdminUser.company.role;
        const profileCompWeb = document.getElementById("profileCompWeb") as HTMLElement;
        profileCompWeb.textContent =
            superAdminUser.company.companywebsite;
    }

    // LOGOUT //
    let superAdminLogOut = document.querySelector(".super-admin-log-out") as HTMLButtonElement;
    superAdminLogOut.addEventListener("click", () => handleSuperAdminLogout());
    function handleSuperAdminLogout() {
        sessionStorage.removeItem("loggedInSuperAdmin");
        window.location.href = "index.html";
    }
    // CLEAR FORMS // 
    const cancelBtn = document.querySelectorAll(".super-admin-cancel-btn") as NodeListOf<Element>
    cancelBtn.forEach((element) => {
        element?.addEventListener("click", (event) => {
            console.log("CENCEL");
            DOMInstance.clearInputAndValidation(addFields, editFields, allAddWarning, allEditWarning)
        });
    })
};


const handlePostSuperAdmin = (event: Event) => {
    DOMInstance.HandlePostSuperAdmin(event)
}
const updateSuperAdmin = (event:Event) =>{
    DOMInstance.UpdateSuperAdmin(event)
}
