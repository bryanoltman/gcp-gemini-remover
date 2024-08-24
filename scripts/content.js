function removeGemini() {
  // Remove the "Explain this log entry" button from log lists
  const explainLogsButton = Array.from(
    document.querySelectorAll("button")
  ).find((el) => el.textContent.includes("Explain this log entry"));

  if (explainLogsButton) {
    explainLogsButton.remove();
  }

  const tryGeminiButton = document.querySelector("#pcc-duet-chat-container");
  if (tryGeminiButton) {
    tryGeminiButton.remove();
  }
}

const targetNode = document.body;

const config = { attributes: true, childList: true, subtree: true };

const observer = new MutationObserver(removeGemini);

observer.observe(targetNode, config);
