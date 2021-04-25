const Manager = require("../lib/Manager");

describe("Manager", () => {

    test("Should create an Manager Object", () => {
        const x = new Manager();
        expect(typeof(x)).toBe("object");
    });

    test("Should create an Manager Object with all the parameters", () => {
        const x = new Manager("gam3fac3", 313, "gam3@fac3.com", 313);
        expect(typeof(x.name)).toBe("string");
        expect(typeof(x.id)).toBe("number");
        expect(typeof(x.email)).toBe("string");
        expect(typeof(x.officeNumber)).toBe("number");
    });

    test("Should create name using the constructor", () => {
        const name = "gam3fac3";
        const x = new Manager(name);
        expect(x.name).toEqual("gam3fac3");
    });

    test("Should create id using the constructor", () => {
        const id = 313;
        const x = new Manager("gam3fac3", id, "gam3@fac3.com", 313);
        expect(x.id).toBe(id);
    });

    test("Should create email using the constructor", () => {
        const email = "gam3@fac3.com";
        const x = new Manager("gam3fac3", 313, email, 313);
        expect(x.email).toBe(email);
    });

    test("Should create officeNumber using the constructor", () => {
        const officeNumber = "gam3@fac3.com";
        const x = new Manager("gam3fac3", 313, "gam3@fac3.com", officeNumber);
        expect(x.officeNumber).toBe(officeNumber);
    });

    test("Should get the role of Manager", () => {
        const x = new Manager("gam3fac3", 313, "gam3@fac3.com", 313);
        expect(x.getRole()).toBe("Manager");
    });

    test("Should get the office number using getOfficeNumber()", () => {
        const x = new Manager("gam3fac3", 313, "gam3@fac3.com", 313);
        expect(x.getOfficeNumber()).toBe(313);
    });
});