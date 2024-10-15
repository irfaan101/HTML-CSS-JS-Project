const inputText = document.getElementById('input-text');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');

inputText.addEventListener('input', () => {
    const text = inputText.value.trim();

    // Update character count
    charCount.textContent = text.length;

    // Update word count
    const words = text.match(/\b\w+\b/g);
    wordCount.textContent = words ? words.length : 0;
});
