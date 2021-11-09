const Engineer = require("/Users/teddysahr/Desktop/Class Homework/hw8-team-profile-generator/__classes__/Engineer");

describe("Engineer", () => {
  it("should create an object with name, position, id, email, and github", () => {
    const engineer = new Engineer("name", "15", "email", "github");

    expect(engineer.name).toEqual("name");
    expect(engineer.id).toEqual("15");
    expect(engineer.email).toEqual("email");
    expect(engineer.github).toEqual("github");
  });
});
