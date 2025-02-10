document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll(".line");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = "100%"; 
            }
        });
    }, { threshold: 0.1 });

    lines.forEach(line => observer.observe(line));
});
