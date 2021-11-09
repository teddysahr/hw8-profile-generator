const Intern = require("/Users/teddysahr/Desktop/Class Homework/hw8-team-profile-generator/__classes__/Intern");

describe("Intern", () => {
  it("should create an object with name, position, id, email, and school", () => {
    const intern = new Intern("name", "15", "email", "school");

    expect(intern.name).toEqual("name");
    expect(intern.id).toEqual("15");
    expect(intern.email).toEqual("email");
    expect(intern.school).toEqual("school");
  });
});
