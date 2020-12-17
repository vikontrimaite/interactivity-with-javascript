function openMessage() {
    element = document.getElementById('secretMessage');
    element.className = 'open';

    // or this way, but in both functions they have to be the same!
    // element.style.display = 'block';
}

function closeMessage() {
    element = document.getElementById('secretMessage');
    element.className = 'closed';

    // element.style.display = 'none';
}