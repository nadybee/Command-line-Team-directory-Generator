const Manager = require("../lib/Manager")

describe("manager ", () => {
  it("should return employee info", () => {
    const answers = {
      name: "Jason Fairbourne",
      id: "1",
      email: "jason@yoodlize.com",
      role: "manager",
      phone: "8015977084",
    }
    const jason = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.phone
    )

    expect(jason.name).toEqual("Jason Fairbourne")
    expect(jason.id).toEqual("1")
    expect(jason.email).toEqual("jason@yoodlize.com")
    expect(jason.role).toEqual("manager")
    expect(jason.phone).toEqual("801-597-7084")
  })
})
