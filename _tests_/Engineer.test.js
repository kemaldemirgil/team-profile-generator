const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

    test("Should create an Engineer Object", () => {
        const x = new Engineer();
        expect(typeof(x)).toBe("object");
    });

    test("Should create an Engineer Object with all the parameters", () => {
        const x = new Engineer("gam3fac3", 313, "gam3@fac3.com", "gam3fac3");
        expect(typeof(x.name)).toBe("string");
        expect(typeof(x.id)).toBe("number");
        expect(typeof(x.email)).toBe("string");
        expect(typeof(x.github)).toBe("string");
    });

    test("Should create name using the constructor", () => {
        const name = "gam3fac3";
        const x = new Engineer(name);
        expect(x.name).toEqual("gam3fac3");
    });

    test("Should create id using the constructor", () => {
        const id = 313;
        const x = new Engineer("gam3fac3", id, "gam3@fac3.com", "gam3fac3");
        expect(x.id).toBe(id);
    });

    test("Should create email using the constructor", () => {
        const email = "gam3@fac3.com";
        const x = new Engineer("gam3fac3", 313, email, "gam3fac3");
        expect(x.email).toBe(email);
    });

    test("Should create Github username using the constructor", () => {
        const github = "gam3@fac3.com";
        const x = new Engineer("gam3fac3", 313, "gam3@fac3.com", github);
        expect(x.github).toBe(github);
    });

    test("Should get the role of Engineer", () => {
        const x = new Engineer("gam3fac3", 313, "gam3@fac3.com", "gam3fac3");
        expect(x.getRole()).toBe("Engineer");
    });

    test("Should get the Github username using getGithub()", () => {
        const x = new Engineer("gam3fac3", 313, "gam3@fac3.com", "gam3fac3");
        expect(x.getGithub()).toBe("gam3fac3");
    });
});