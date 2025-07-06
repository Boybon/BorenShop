
        document.addEventListener('DOMContentLoaded', () => {
            const partnersContainer = document.querySelector('.partners');

            // For seamless infinite scrolling, we duplicate the logos
            if (partnersContainer) {
                const logos = partnersContainer.querySelectorAll('img');
                logos.forEach(logo => {
                    const clone = logo.cloneNode(true);
                    clone.setAttribute('aria-hidden', 'true'); // Hide clones from screen readers
                    partnersContainer.appendChild(clone);
                });
            }
        });