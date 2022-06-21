const Engineer = require("../lib/Engineer")


describe("manager ", () => {
    it("should return employee info", () => {
      const answers = {
        name: "Jason Fairbourne",
        id: "1",
        email: "jason@yoodlize.com",
        github: "nadybee"
      }
      const jason = new Engineer(
        answers.name,
        answers.id,
        answers.email,
       answers.github
      )
  
      expect(jason.name).toEqual("Jason Fairbourne")
      expect(jason.id).toEqual("1")
      expect(jason.email).toEqual("jason@yoodlize.com")
      expect(jason.role).toEqual('engineer')
      expect(jason.github).toEqual("nadybee")
    })
  })