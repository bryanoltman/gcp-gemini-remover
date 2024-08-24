function removeGemini() {
  // Remove the "Explain this log entry" button from log lists
  const explainLogsButton = Array.from(
    document.querySelectorAll("button")
  ).find((el) => el.textContent.includes("Explain this log entry"));

  if (explainLogsButton) {
    explainLogsButton.remove();
  }

  // Remove the "Try Gemini" button from the top bar
  const tryGeminiButton = document.querySelector("#pcc-duet-chat-container");
  if (tryGeminiButton) {
    tryGeminiButton.remove();
  }

  // Remove all marketing cards that contain the word "Gemini"
  Array.from(document.querySelectorAll(".marketing-card")).forEach((el) => {
    console.log("el", el);
    if (el.textContent.includes("Gemini")) {
      el.remove();
    }
  });
}

const targetNode = document.body;

const config = { attributes: true, childList: true, subtree: true };

const observer = new MutationObserver(removeGemini);

observer.observe(targetNode, config);
