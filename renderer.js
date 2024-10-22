document.getElementById('blob').addEventListener('click', () => {
    const blob = document.getElementById('blob');
    blob.style.transition = 'transform 0.5s ease-out';
    blob.style.transform = 'scale(5)';
    
    setTimeout(() => {
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('main-ui').style.display = 'flex';
    }, 500);
});

// Display time in settings widget
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
