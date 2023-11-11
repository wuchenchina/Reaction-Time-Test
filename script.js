document.getElementById('start-button').addEventListener('click', startGame);

let startTime;
let reactionTimes = [];

function startGame() {
    document.getElementById('start-button').classList.add('hidden');
    showRandomShape();
}

function showRandomShape() {
    const shape = document.createElement('div');
    shape.classList.add('shape');
    shape.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    shape.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    shape.style.backgroundColor = getRandomColor();
    shape.onclick = shapeClicked;

    document.body.appendChild(shape);
    startTime = new Date();
}

function shapeClicked() {
    const endTime = new Date();
    const reactionTime = (endTime - startTime) / 1000;
    reactionTimes.push(reactionTime);
    this.remove();

    if (reactionTimes.length < 10) {
        setTimeout(showRandomShape, Math.random() * 2000);
    } else {
        endGame();
    }
}

function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function endGame() {
    const average = reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length;
    alert(`测试完成！\n平均反应时间：${average.toFixed(2)} 秒`);
    document.getElementById('start-button').classList.remove('hidden');
    reactionTimes = [];
}
