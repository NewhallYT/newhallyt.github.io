document.getElementById('copy-btn').addEventListener('click', function() {
    const ipAddress = document.getElementById('ip-address').innerText;
    
    // Creates a temporary element to copy the text
    const tempInput = document.createElement('input');
    tempInput.value = ipAddress;
    document.body.appendChild(tempInput);
    
    // Selects and copies the text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    
    // Removes the temporary element
    document.body.removeChild(tempInput);
    
    // Changes the button text to show it's copied
    const originalText = this.innerText;
    this.innerText = 'Copied!';
    
    // Resets the original text after 2 seconds
    setTimeout(() => {
        this.innerText = originalText;
    }, 2000);
});