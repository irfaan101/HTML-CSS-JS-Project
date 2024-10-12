function formatText(command, value = null) {
    document.execCommand(command, false, value);
}

function downloadFile() {
    const textEditor = document.getElementById("text-editor");
    const textContent = textEditor.innerText;
    const blob = new Blob([textContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "editor-content.txt";
    downloadLink.click();
}