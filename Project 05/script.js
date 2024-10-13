async function checkIFSC() {
    const ifscCode = document.getElementById('ifscInput').value.trim().toUpperCase();
    const resultDiv = document.getElementById('result');
    const loader = document.getElementById('loader');
    
    resultDiv.innerHTML = '';
    
    if (!ifscCode || ifscCode.length !== 11) {
        resultDiv.innerHTML = '<p class="error">Please enter a valid 11-character IFSC code.</p>';
        return;
    }

    loader.style.display = 'block';

    try {
        const response = await fetch(`https://ifsc.razorpay.com/${ifscCode}`);
        const data = await response.json();
        loader.style.display = 'none';
        
        if (response.ok) {
            resultDiv.innerHTML = `
                <p><strong>Bank:</strong> ${data.BANK}</p>
                <p><strong>Branch:</strong> ${data.BRANCH}</p>
                <p><strong>Address:</strong> ${data.ADDRESS}</p>
                <p><strong>City:</strong> ${data.CITY}</p>
                <p><strong>State:</strong> ${data.STATE}</p>
                <p><strong>Contact:</strong> ${data.CONTACT || 'N/A'}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p class="error">${data.message || 'Invalid IFSC Code'}</p>`;
        }
    } catch (error) {
        loader.style.display = 'none';
        resultDiv.innerHTML = `<p class="error">An error occurred. Please try again later.</p>`;
    }
}
