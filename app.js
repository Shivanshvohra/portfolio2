document.addEventListener('DOMContentLoaded', () => {
    // Add subtle animations to sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease';
        observer.observe(section);
    });

    // Add hover effect to items
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
        item.addEventListener('mouseout', () => {
            item.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        });
    });
});