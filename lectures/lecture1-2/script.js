document.addEventListener('DOMContentLoaded', () => {
    // Scroll animation for elements with 'fade-up' class
    const fadeElements = document.querySelectorAll('.fade-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animating once to keep the element visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        elementObserver.observe(element);
    });

    // =========================================================================
    // Mini Game: Gem Explorer
    // =========================================================================
    const gameContainer = document.getElementById('game-container');
    const playerEl = document.getElementById('player');
    const overlay = document.getElementById('game-overlay');
    const titleEl = document.getElementById('game-title');
    const scoreValEl = document.getElementById('score-val');
    const finalScoreValEl = document.getElementById('final-score-val');
    const finalScoreP = document.getElementById('game-score-final');

    let isPlaying = false;
    let score = 0;
    let frames = 0;
    
    // Physics
    let playerY = 0; // 0 is ground
    let velocityY = 0;
    const gravity = 0.6;
    const jumpPower = 12;

    let obstacles = [];
    let gems = [];
    let gameSpeed = 5;
    let animationId;

    // Start / Restart Game
    function startGame() {
        if (isPlaying) return;
        isPlaying = true;
        score = 0;
        frames = 0;
        playerY = 0;
        velocityY = 0;
        gameSpeed = 5;
        
        // Clear DOM items
        obstacles.forEach(ob => ob.element.remove());
        gems.forEach(g => g.element.remove());
        obstacles = [];
        gems = [];

        scoreValEl.textContent = '0';
        overlay.classList.add('hidden');
        titleEl.classList.remove('neon-pulse');

        lastTime = performance.now();
        animationId = requestAnimationFrame(gameLoop);
    }

    // GameOver
    function gameOver() {
        isPlaying = false;
        cancelAnimationFrame(animationId);
        
        overlay.classList.remove('hidden');
        titleEl.textContent = 'GAME OVER - Press Space to Restart';
        titleEl.classList.add('neon-pulse');
        finalScoreValEl.textContent = Math.floor(score);
        finalScoreP.classList.remove('hidden');
    }

    // Jump
    function jump() {
        if (!isPlaying) {
            startGame();
            return;
        }
        if (playerY <= 0) { // On ground
            velocityY = jumpPower;
        }
    }

    // Controls
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            jump();
        }
    });
    gameContainer.addEventListener('mousedown', jump);
    gameContainer.addEventListener('touchstart', (e) => { e.preventDefault(); jump(); }, {passive: false});

    // Game Loop
    let lastTime = 0;
    function gameLoop(time) {
        if (!isPlaying) return;
        
        // Increase difficulty slightly over time
        frames++;
        if (frames % 600 === 0) gameSpeed += 0.5;

        // Player Physics
        velocityY -= gravity;
        playerY += velocityY;

        if (playerY < 0) {
            playerY = 0;
            velocityY = 0;
        }
        playerEl.style.bottom = (20 + playerY) + 'px';

        // Obstacles Generation
        if (Math.random() < 0.01 + (gameSpeed * 0.001)) {
            if (obstacles.length === 0 || obstacles[obstacles.length - 1].x < gameContainer.clientWidth - 200) {
                createObstacle();
            }
        }

        // Gem Generation
        if (Math.random() < 0.015) {
             if (gems.length === 0 || gems[gems.length - 1].x < gameContainer.clientWidth - 100) {
                 createGem();
             }
        }

        // Update Obstacles
        for (let i = obstacles.length - 1; i >= 0; i--) {
            let ob = obstacles[i];
            ob.x -= gameSpeed;
            ob.element.style.left = ob.x + 'px';

            // Collision (AABB)
            const pRect = playerEl.getBoundingClientRect();
            const oRect = ob.element.getBoundingClientRect();

            if (pRect.left < oRect.right - 5 && pRect.right > oRect.left + 5 &&
                pRect.top < oRect.bottom - 5 && pRect.bottom > oRect.top + 5) {
                gameOver();
                return;
            }

            if (ob.x < -50) {
                ob.element.remove();
                obstacles.splice(i, 1);
                score += 10; // passive score
            }
        }

        // Update Gems
        for (let i = gems.length - 1; i >= 0; i--) {
            let g = gems[i];
            g.x -= gameSpeed;
            g.element.style.left = g.x + 'px';

            // Gem Collision
            const pRect = playerEl.getBoundingClientRect();
            const gRect = g.element.getBoundingClientRect();

            if (pRect.left < gRect.right && pRect.right > gRect.left &&
                pRect.top < gRect.bottom && pRect.bottom > gRect.top) {
                // Collect
                g.element.remove();
                gems.splice(i, 1);
                score += 50; // Bonus score
            } else if (g.x < -50) {
                g.element.remove();
                gems.splice(i, 1);
            }
        }

        score += 0.1;
        scoreValEl.textContent = Math.floor(score);

        animationId = requestAnimationFrame(gameLoop);
    }

    function createObstacle() {
        const el = document.createElement('div');
        el.className = 'obstacle';
        el.style.left = gameContainer.clientWidth + 'px';
        gameContainer.appendChild(el);
        obstacles.push({ x: gameContainer.clientWidth, element: el });
    }

    function createGem() {
        const el = document.createElement('div');
        el.className = 'gem';
        el.textContent = '💎';
        el.style.left = gameContainer.clientWidth + 'px';
        // Random layout (high or low)
        el.style.bottom = (Math.random() > 0.5 ? 90 : 30) + 'px';
        gameContainer.appendChild(el);
        gems.push({ x: gameContainer.clientWidth, element: el });
    }

    // Init display
    titleEl.classList.add('neon-pulse');
});
