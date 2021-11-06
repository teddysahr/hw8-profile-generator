const fs = require("fs");

function generateFile(data) {
  fs.writeFile(
    __output__ + "index.html",
    `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${data.name}</title>
          </head>
          <body>
            <header>
              <h1>Hi! My name is ${data.name}</h1>
            </header>
            <main>
              <section>
                <h2>I'm from ${data.location}</h2>
              </section>
              <section>
                <p>${data.bio}</p>
              </section>
              <section>
                <h2>Contact</h2>
                <ul>
                  <li>${data.linkedIn}</li>
                  <li>${data.github}</li>
                </ul>
              </section>
            </main>
          </body>
        </html>`,
    (err) => (err ? console.error(err) : console.log("Success!"))
  );
}

module.exports = generateFile;
