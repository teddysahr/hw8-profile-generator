const Manager = require("/Users/teddysahr/Desktop/Class Homework/hw8-team-profile-generator/__classes__/manager");

describe("Manager", () => {
  it("should create an object with name, position, id, email, and office number", () => {
    const manager = new Manager("name", "15", "email", "office");

    expect(manager.name).toEqual("name");
    expect(manager.id).toEqual("15");
    expect(manager.email).toEqual("email");
    expect(manager.office).toEqual("office");
  });
});
