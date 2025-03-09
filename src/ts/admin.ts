

window.onload = (event) => {
    DOMInstance.RenderAdmin(API_response);
    const deleteBtn = document.getElementById("deleteFormSubmit") as HTMLFormElement
    deleteBtn?.addEventListener("submit", (event) => DOMInstance.HandleDelete(event))
    // PROFILE //
    const adminUser = JSON.parse(sessionStorage.getItem("loggedInAdmin") || '{}')
    if (Object.keys(adminUser).length == 0) {
        window.location.href = "index.html";
    } else {
        const profileFullName = document.getElementById("profileFullName") as HTMLElement;
        profileFullName.textContent = adminUser.first_name + " " + adminUser.last_name;
        const profileEmail = document.getElementById("profileEmail") as HTMLElement;
        profileEmail.textContent = adminUser.email;
        const profilePhone = document.getElementById("profilePhone") as HTMLElement;
        profilePhone.textContent = adminUser.phone;
        const profileAddress = document.getElementById("profileAddress") as HTMLElement;
        profileAddress.textContent =
            adminUser.address.hnumber +
            ", " +
            adminUser.address.street +
            ", " +
            adminUser.address.city +
            ", " +
            adminUser.address.pincode;
        const profileCompName = document.getElementById("profileCompName") as HTMLElement;
        profileCompName.textContent = adminUser.company.companyname;
        const profileRole = document.getElementById("profileRole") as HTMLElement;
        profileRole.textContent = adminUser.company.role;
        const profileCompWeb = document.getElementById("profileCompWeb") as HTMLElement;
        profileCompWeb.textContent =
            adminUser.company.companywebsite;
    }

    // LOGOUT //
    let superAdminLogOut = document.querySelector(".admin-log-out") as HTMLButtonElement;
    superAdminLogOut.addEventListener("click", () => handleAdminLogout());
    function handleAdminLogout() {
        sessionStorage.removeItem("loggedInSuperAdmin");
        window.location.href = "index.html";
    }
    // CLEAR FORMS // 
    const cancelBtn = document.querySelectorAll(".admin-btn-cancel") as NodeListOf<Element>
    cancelBtn.forEach((element) => {
        element?.addEventListener("click", (event) => {
            console.log("CENCEL");
            DOMInstance.clearInputAndValidation(addFields, editFields, allAddWarning, allEditWarning)
        });
    })
};

const handlePostAdmin = (event: Event) => {
    DOMInstance.HandlePostAdmin(event)
}
const updateAdmin = (event:Event)=>{
    DOMInstance.UpdateAdmin(event)
}