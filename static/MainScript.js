//const chalk = require("chalk");

const now = new Date();
const hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");
11.4;
const currentTime = `${hours}:${minutes}:${seconds}`;

document.querySelectorAll("startServiceBtn").forEach((click) => {
  document.addEventListener("click", () => {
    //  console.log(chalk.green("Service started at:", currentTime));
  });
});

function term() {
  document
    .getElementById("input")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        const input = document.getElementById("input");
        const output = document.getElementById("output");
        const command = input.value.trim();

        if (command) {
          output.innerHTML += `<div class="command-line"><span class="prompt">/ $</span> ${command}</div>`;
          handleCommand(command);
        }

        input.value = "";
        output.scrollTop = output.scrollHeight;
      }
    });

  function handleCommand(command) {
    const output = document.getElementById("output");

    // Basic commands
    switch (command) {
      case "help":
        output.innerHTML +=
          "<div>Available commands: help, clear, echo [message]</div>";
        break;
      case "clear":
        output.innerHTML = "";
        break;
      case "http":
        //   output.innerHTML = "<div class="card"></div>";
        break;
      default:
        if (command.startsWith("echo ")) {
          output.innerHTML += `<div>${command.slice(5)}</div>`;
        } else {
          output.innerHTML += `<div>Command not found: ${command}</div>`;
        }
    }
  }
}

function aboutButton() {
  alert(`
    Super, the superWebapp
    ✅ version 0.0.1-beta.1
    📦 deno 2.0.2
    💻 Unknown
    🐱 https://github.com/stumbdev/superweb
    📄 V8 11.4
    `);
}
