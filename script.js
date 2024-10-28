window.onload = function() {
    
    const bombContainer = document.getElementById('bombContainer');
    const bomb = document.getElementById('bomb');

    
    bombContainer.style.transition = 'top 2s ease';
    bombContainer.style.top = '50%'; 

    setTimeout(() => {
               document.body.classList.add('exploded');

        
        bomb.style.transform = 'scale(5)'; 
        bomb.style.opacity = '0'; 
        
        const lyrics = document.querySelector('.lyrics');
        lyrics.style.color = 'yellow';
    }, 2000); 
    window.onload = function() {
        const backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.volume = 0.7; 
    
    };
    
};
