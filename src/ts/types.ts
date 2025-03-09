type User = {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: Address;
    company: company;
    password?: string;
};
type Address = {
    hnumber: string;
    street: string;
    city: string;
    pincode: string;
}
type company = {
    companyname: string;
    companywebsite: string;
    role: string;
}
