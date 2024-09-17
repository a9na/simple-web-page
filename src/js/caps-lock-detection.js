// Caps Lock detection for email input
window.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const capsWarning = document.getElementById('caps-warning');

    if (emailInput) {
        emailInput.addEventListener('keyup', (event) => {
            const capsLockOn = event.getModifierState('CapsLock');
            if (capsLockOn) {
                capsWarning.style.display = 'block';
            } else {
                capsWarning.style.display = 'none';
            }
        });
    }
});
