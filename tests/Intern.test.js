const Intern = require("../lib/Intern")


describe("intern", () => {
    it("should return intern info", () => {
      const answers = {
        name: "Jason Fairbourne",
        id: "1",
        email: "jason@yoodlize.com",
        school: "BYU"
      }
      const jason = new Intern(
        answers.name,
        answers.id,
        answers.email,
       answers.school
      )
  
      expect(jason.name).toEqual("Jason Fairbourne")
      expect(jason.id).toEqual("1")
      expect(jason.email).toEqual("jason@yoodlize.com")
      expect(jason.role).toEqual('intern')
      expect(jason.school).toEqual("BYU")
    })
  })