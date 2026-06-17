const copyButton = document.querySelector("[data-copy-bibtex]");
const disabledLinks = document.querySelectorAll("[data-disabled-link]");

for (const disabledLink of disabledLinks) {
  disabledLink.addEventListener("click", () => {
    disabledLink.blur();
  });
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const bibtex = document.querySelector("#bibtex")?.innerText.trim();
    const status = document.querySelector("#copy-status");

    if (!bibtex || !status) {
      return;
    }

    try {
      await navigator.clipboard.writeText(bibtex);
      status.textContent = "Copied.";
      copyButton.textContent = "Copied";
      window.setTimeout(() => {
        status.textContent = "";
        copyButton.textContent = "Copy BibTeX";
      }, 1800);
    } catch {
      status.textContent = "Select the BibTeX text and copy it manually.";
    }
  });
}
