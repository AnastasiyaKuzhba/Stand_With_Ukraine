document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.list-style-type_square');
    
    timelineItems.forEach(item => {
        // Store original height
        const originalHeight = item.offsetHeight;
        
        // Add mouseenter event
        item.addEventListener('mouseenter', function() {
            this.style.height = 'auto';
            const newHeight = this.offsetHeight;
            this.style.height = originalHeight + 'px';
            
            // Trigger reflow
            this.offsetHeight;
            
            // Animate to new height
            this.style.transition = 'height 0.3s ease';
            this.style.height = newHeight + 'px';
        });
        
        // Add mouseleave event
        item.addEventListener('mouseleave', function() {
            this.style.height = originalHeight + 'px';
        });
    });
}); 