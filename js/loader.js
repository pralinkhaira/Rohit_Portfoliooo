// Check if user has already seen the loader in this session
if (sessionStorage.getItem('loaderShown') === 'true') {
    // Hide loader immediately on returning visits
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
        loader.style.pointerEvents = 'none';
    }
} else {
    // Show loader on first visit
    sessionStorage.setItem('loaderShown', 'true');
    const loader = document.getElementById('loader');

    // Ensure loader doesn't block clicks
    if (loader) {
        loader.style.pointerEvents = 'none';
    }

    // After animation completes, hide it
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 2000); // Adjust timing as needed
}
