const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');

    questionButton.addEventListener('click', () => {
        // Check if the current item is already active
        const isActive = item.classList.contains('active');

        // Optional: Close all other items before opening this one
        // faqItems.forEach(otherItem => {
        //     if (otherItem !== item) {
        //         otherItem.classList.remove('active');
        //     }
        // });

        // Toggle the active class on the clicked item
        item.classList.toggle('active');

        // If you want only one open at a time, use this instead of toggle:
        // if (!isActive) {
        //     item.classList.add('active');
        // } else {
        //     item.classList.remove('active'); // Allow closing the currently open one
        // }

    });
});
