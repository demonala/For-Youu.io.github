document.addEventListener('DOMContentLoaded', function() {
    const prayButton = document.getElementById('prayButton');
    const prayMessageElement = document.getElementById('prayMessage'); // Get the paragraph element

    const originalPrayText = prayMessageElement.textContent; // Store the original text
    let messageChanged = false;

    if (prayButton) {
        prayButton.addEventListener('click', function() {
            // You can make this do something more interactive or change the message.
            // For now, let's change the pray text slightly and then maybe revert or show an alert.
            if (!messageChanged) {
                prayMessageElement.style.transition = 'opacity 0.5s ease-in-out';
                prayMessageElement.style.opacity = '0';

                setTimeout(() => {
                    prayMessageElement.textContent = "✨ Wishing you all the best, Alya! ✨";
                    prayMessageElement.style.color = '#00ffff'; // Change color to cyan
                    prayMessageElement.style.fontWeight = 'bold';
                    prayMessageElement.style.opacity = '1';
                    messageChanged = true;
                }, 500);

                // Optionally, show an alert or do something else too
                // alert("A special wish has been made for Alya! ❤️");

            } else {
                // Revert to original or do something else on a second click
                prayMessageElement.style.opacity = '0';
                setTimeout(() => {
                    prayMessageElement.textContent = originalPrayText;
                    prayMessageElement.style.color = '#d8d0f0'; // Revert color
                    prayMessageElement.style.fontWeight = 'normal'; // Revert font weight
                    prayMessageElement.style.opacity = '1';
                    messageChanged = false;
                }, 500);
            }
        });
    }
});
