function removeGeminiButton() {
  const button = Array.from(document.querySelectorAll("button")).find((el) =>
    el.textContent.includes("Explain this log entry")
  );

  if (button) {
    button.remove();
  }
}

const targetNode = document.body;

const config = { attributes: true, childList: true, subtree: true };

const observer = new MutationObserver(removeGeminiButton);

observer.observe(targetNode, config);
