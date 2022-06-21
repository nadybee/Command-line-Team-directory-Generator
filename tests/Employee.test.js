const Employee = require("../lib/Employee")

describe("employee ", () => {
  it("should return employee info", () => {
    const answers = {
      name: "Jason Fairbourne",
      id: "1",
      email: "jason@yoodlize.com",
     
    }
    const jason = new Employee(
      answers.name,
      answers.id,
      answers.email,
      answers.role
    )

    expect(jason.name).toEqual("Jason Fairbourne")
    expect(jason.id).toEqual("1")
    expect(jason.email).toEqual("jason@yoodlize.com")
    expect(jason.role).toEqual("employee")
  })
})
