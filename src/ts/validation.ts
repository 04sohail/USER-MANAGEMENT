class Validation {
    // ON BLUR VALIDATION //
    async OnBlurValidate(event: Event, warningElement: HTMLDivElement, inputElement: HTMLInputElement): Promise<void> {
        const inputTarget = event.target as HTMLInputElement
        const value: string | null = inputTarget.value?.trim();
        console.log("INSIDE ONBLURVALIDATE");
        if (value.length == 0) {
            // loginForm.style.height = "545px";
            inputElement.classList.remove("is-valid")
            inputElement.classList.add("is-invalid")
            warningElement.style.display = "block";
        } else {
            warningElement.style.display = "none";
        }
    };
    // ON INPUT VALIDATION //
    OnInputValidateName(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        console.log(value);
        if (value.length > 15) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Name Should Not be Greater Than 15 Letters </small>"
            warningElement.style.display = "block"
        } else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Name Should Be Alphabet</small>"
            warningElement.style.display = "block"

        } else {
            eventTarget.classList.remove("is-invalid");
            eventTarget.classList.add("is-valid");
            warningElement.innerHTML = "<small>This Field Is Required !!! </small>"
            warningElement.style.display = "none"
        }
    };
    async OnInputValidateEmail(event: Event, regex: RegExp, warningElement: HTMLDivElement): Promise<void> {
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (regex.test(value)) {
            warningElement.style.display = "none"
            eventTarget.classList.remove("is-invalid");
            eventTarget.classList.add("is-valid");
        } else {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid Email !!! </small>"
            warningElement.style.display = "block"
        }
    };
    OnInputValidatePhone(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (regex.test(value)) {
            if (value.length > 10) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>Number Should Be 10 Digit</small>"
                warningElement.style.display = "block"
            }
            else {
                eventTarget.classList.add("is-valid");
                eventTarget.classList.remove("is-invalid");
                warningElement.innerHTML = "<small>This Field Is Required !!! </small>"
                warningElement.style.display = "none"
            }
        } else {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid Number !!!</small>"
            warningElement.style.display = "block"
        }
    }
    OnInputValidateHNumber(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 30;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length > maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>House number cannot exceed ${maxLength} characters. Please shorten it.</small>`
            warningElement.style.display = "block"
        } else if (!regex.test(value)) {
            if (/[^A-Za-z0-9\s/#-]/.test(value)) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>House number can only contain letters, numbers, spaces, and the symbols `-`, `/`, or `#`.</small>"
                warningElement.style.display = "block"
            }
            else if (/[-/#]{2,}/.test(value)) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>House number cannot have consecutive special characters like `--` or `##`.</small>"
                warningElement.style.display = "block"
            }
            else if (/^[-/#]|[-/#]$/.test(value)) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>House number cannot start or end with `-`, `/`, or `#`.</small>"
                warningElement.style.display = "block"
            }
            else if (/^\s+$/.test(value)) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>House number cannot be empty or consist of only spaces.</small>"
                warningElement.style.display = "block"
            }
            else {
                eventTarget.classList.add("is-valid");
                eventTarget.classList.remove("is-invalid");
                warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
                warningElement.style.display = "none"
            }
        } else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidateStreet(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 50;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length > maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Street name cannot exceed ${maxLength} characters. Please shorten it.</small>`
            warningElement.style.display = "block"
        } else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Street name can only contain letters, numbers, spaces, and the symbols `.,#/-`. </small>"
            warningElement.style.display = "block"
        }
        else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidateCity(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 50;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length > maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>City name cannot exceed ${maxLength} characters.</small>`
            warningElement.style.display = "block"
        } else if (value.startsWith('.') || value.startsWith('-')) {
            console.log("INSIDE");
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Can't Start With (-) Or (-)</small>`
            warningElement.style.display = "block"
        }
        else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Only letters, spaces, (.), and(-) allowed</small>"
            warningElement.style.display = "block"
        }
        else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidatePinCode(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 6;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length !== maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Pincode must be exactly 6 digits.</small>`
            warningElement.style.display = "block"
        } else if (value[0] === "0") {
            console.log("INSIDE");
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Pincode cannot start with 0.</small>`
            warningElement.style.display = "block"
        } else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid pincode.</small>"
            warningElement.style.display = "block"
        } else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidateCompanyName(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 100;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length > maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Company name cannot exceed 100 characters.</small>`
            warningElement.style.display = "block"
        } else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid company name.</small>"
            warningElement.style.display = "block"
        }
        else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidateCompanyWeb(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid website URL.</small>"
            warningElement.style.display = "block"
        } else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidatePassword(event: Event, warningElement: HTMLDivElement): void {
        const eventTarget = event.target as HTMLInputElement;
        const value: string = eventTarget.value.trim();
        if (value.length < 8) {
            warningElement.innerHTML = "<small>Password must be at least 8 characters long.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else if (!/[a-z]/.test(value)) {
            warningElement.innerHTML = "<small>Password must contain at least one lowercase letter.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else if (!/[A-Z]/.test(value)) {
            warningElement.innerHTML = "<small>Password must contain at least one uppercase letter.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else if (!/[0-9]/.test(value)) {
            warningElement.innerHTML = "<small>Password must contain at least one number.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            warningElement.innerHTML = "<small>Password must contain at least one special character.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else {
            warningElement.style.display = "none";
            eventTarget.classList.remove("is-invalid");
            eventTarget.classList.add("is-valid");
        }
    }
    ValidateEmptyField(inputFields: HTMLInputElement[], warningElement: NodeListOf<HTMLDivElement>): boolean {
        let isValid = true
        inputFields.forEach(field => {
            if (!field.value) {
                isValid = false
                inputFields.forEach(Element => {
                    Element.classList.remove("is-valid")
                    Element.classList.add("is-invalid")
                })
                warningElement.forEach(Element => {
                    Element.innerHTML = "<small>This Field Is Required !!! </small>"
                    Element.style.display = "block"
                })
                return isValid
            }
        })
        return isValid
    };
    // VALIDATE REGEX
    ValidateRegex(input: HTMLInputElement, regex: RegExp): boolean {
        const value = input.value.trim();
        if (regex.test(value)) {
            return true;
        } else {
            return false;
        }
    }
    async AddValidateExists(emailField: HTMLInputElement, phoneField: HTMLInputElement): Promise<boolean> {
        const findEmail = await APIInstance.GetSingleUser(`email=${emailField.value}`);
        console.log("ValidateExists", findEmail);
        const findPhone = await APIInstance.GetSingleUser(`phone=${phoneField.value}`);
        console.log("ValidateExists", findPhone);
        debugger;
        if (Array.isArray(findEmail) && findEmail.length > 0) {
            emailField.focus()
            addEmailWarning.style.display = "block";
            addEmailWarning.innerHTML = "<small>Email already exists </small>";
            return false
        }
        else if (Array.isArray(findPhone) && findPhone.length > 0) {
            phoneField.focus()
            addPhoneWarning.style.display = "block";
            addPhoneWarning.innerHTML = "<small>Phone already exists </small>";
            return false
        } else {
            return true;
        }
    }
    async EditValidateExists(editFields: HTMLInputElement[], userId: null | string | undefined): Promise<boolean> {
        const findEmail:Object[] | undefined = await APIInstance.GetSingleUser(`email=${encodeURIComponent(editFields[2].value)}`);
        console.log("ValidateExistsEMAIL", findEmail, typeof findEmail);
        const findPhone = await APIInstance.GetSingleUser(`phone=${encodeURIComponent(editFields[3].value)}`);
        console.log("ValidateExistsPHONE", findPhone);
        debugger;
        if (Array.isArray(findEmail) && findEmail.length > 0 && findEmail[0].id !== userId) {
            editFields[2].focus()
            editEmailWarning.style.display = "block";
            editEmailWarning.innerHTML = "<small>Email already exists </small>";
            return false
        }
        else if (Array.isArray(findPhone) && findPhone.length > 0 && findPhone[0].id !== userId) {
            editFields[3].focus()
            editPhoneWarning.style.display = "block";
            editPhoneWarning.innerHTML = "<small>Phone already exists </small>";
            return false
        }
        else {
            return true;
        }
    }
    async CustomerEditValidateExists(editFields: HTMLInputElement[], userId: null | string | undefined): Promise<boolean> {
        const findEmail:Object[] | undefined = await customerAPIInstance.GetSingleUser(`email=${encodeURIComponent(editFields[2].value)}`);
        console.log("ValidateExistsEMAIL", findEmail, typeof findEmail);
        const findPhone = await customerAPIInstance.GetSingleUser(`phone=${encodeURIComponent(editFields[3].value)}`);
        console.log("ValidateExistsPHONE", findPhone);
        debugger;
        if (Array.isArray(findEmail) && findEmail.length > 0 && findEmail[0].id !== userId) {
            editFields[2].focus()
            editEmailWarning.style.display = "block";
            editEmailWarning.innerHTML = "<small>Email already exists </small>";
            return false
        }
        else if (Array.isArray(findPhone) && findPhone.length > 0 && findPhone[0].id !== userId) {
            editFields[3].focus()
            editPhoneWarning.style.display = "block";
            editPhoneWarning.innerHTML = "<small>Phone already exists </small>";
            return false
        }
        else {
            return true;
        }
    }
    ValidateUpdateRegex() {
        return validation.ValidateRegex(addFields[0], /^[A-Za-z\s]{1,15}$/) &&
            validation.ValidateRegex(addFields[1], /^[A-Za-z\s]{1,15}$/) &&
            validation.ValidateRegex(addFields[2], /^(?=[a-zA-Z0-9@._%+-]{1,254}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
            validation.ValidateRegex(addFields[3], /^[6789]{1}\d{9}$/) &&
            validation.ValidateRegex(addFields[4], /^[A-Za-z0-9]+(?:[-/#\s][A-Za-z0-9]+){0,29}$/) &&
            validation.ValidateRegex(addFields[5], /^[a-zA-Z0-9][a-zA-Z0-9\s.,#/-]*$/) &&
            validation.ValidateRegex(addFields[6], /^[a-zA-Z]+(?:[\s.-][a-zA-Z]+)*$/) &&
            validation.ValidateRegex(addFields[7], /^[1-9][0-9]{5}$/) &&
            validation.ValidateRegex(addFields[8], /^[a-zA-Z0-9]+(?:[\s&.,'-][a-zA-Z0-9]+)*(?:\s(Ltd\.|Pvt\.|Private|LLP|Inc\.|Corporation|Company))?$/) &&
            validation.ValidateRegex(addFields[9], /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,10}(\/[a-zA-Z0-9-]*){0,50}\/?$/)
    }
    ValidateEmptyLogin(inputFields: HTMLInputElement[], warningElement: NodeListOf<HTMLDivElement>): boolean {
        let isValid = true
        inputFields.forEach(field => {
            if (!field.value) {
                isValid = false
                inputFields.forEach(Element => {
                    Element.classList.remove("is-valid")
                    Element.classList.add("is-invalid")
                })
                warningElement.forEach(Element => {
                    Element.innerHTML = "<small>This Field Is Required !!! </small>"
                    Element.style.display = "block"
                })
                return isValid
            }
        })
        return isValid
    }
}
