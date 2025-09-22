// --- ゲームの初期設定 ---

const animalArea = document.getElementById('animal-area');
const messageText = document.getElementById('message-text');
const items = document.querySelectorAll('.item');

let isHappy = false;

const bear = {
    sad: 'images/animal_bear_sad.png',
    happy: 'images/animal_bear_happy.png'
};

const correctItemId = "1";

// --- ゲームの処理 ---

function showSadBear() {
    animalArea.innerHTML = `<img src="${bear.sad}" alt="悲しいクマ">`;
    messageText.textContent = 'おなかがすいたよぉ...';
    isHappy = false;
}

function makeBearHappy() {
    animalArea.innerHTML = `<img src="${bear.happy}" alt="嬉しいクマ">`;
    messageText.textContent = 'ありがとう！元気が出たよ！';
    isHappy = true;
    // new Audio('sounds/success.mp3').play();
}

items.forEach(item => {
    item.addEventListener('click', () => {
        if (isHappy) {
            return;
        }

        const selectedItemId = item.dataset.itemId;

        if (selectedItemId === correctItemId) {
            makeBearHappy();
        } else {
            messageText.textContent = 'うーん、これじゃないみたい...';
        }
        // new Audio('sounds/click.mp3').play();
    });
});

// --- ゲーム開始 ---
showSadBear();
