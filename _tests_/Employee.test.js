const Employee = require("../lib/Employee");

describe("Employee", () => {

    test("Should create an Employee Object", () => {
        const x = new Employee();
        expect(typeof(x)).toBe("object");
    });

    test("Should create an Employee Object with all the parameters", () => {
        const x = new Employee("gam3fac3", 313, "gam3@fac3.com");
        expect(typeof(x.name)).toBe("string");
        expect(typeof(x.id)).toBe("number");
        expect(typeof(x.email)).toBe("string");
    });

    test("Should create name using the constructor", () => {
        const name = "gam3fac3";
        const x = new Employee(name);
        expect(x.name).toEqual("gam3fac3");
    });

    test("Should create id using the constructor", () => {
        const id = 313;
        const x = new Employee("gam3fac3", id, "gam3@fac3.com");
        expect(x.id).toBe(id);
    });

    test("Should create email using the constructor", () => {
        const email = "gam3@fac3.com";
        const x = new Employee("gam3fac3", 313, email);
        expect(x.email).toBe(email);
    });

    test("Should get the role of Employee", () => {
        const x = new Employee("gam3fac3", 313, "gam3@fac3.com");
        expect(x.getRole()).toBe("Employee");
    });

    test("Should get the name using getName()", () => {
        const x = new Employee("gam3fac3", 313, "gam3@fac3.com");
        expect(x.getName()).toBe("gam3fac3");
    });

    test("Should get the id using getId()", () => {
        const x = new Employee("gam3fac3", 313, "gam3@fac3.com");
        expect(x.getId()).toBe(313);
    });

    test("Should get the email using getEmail()", () => {
        const x = new Employee("gam3fac3", 313, "gam3@fac3.com");
        expect(x.getEmail()).toBe("gam3@fac3.com");
    });
});