// تبديل حالة القائمة المنسدلة  
        function toggleMenu() {  
            const menu = document.querySelector('.list');  
            const menuBtn = document.querySelector('.menu-btn');  
            menu.classList.toggle('active'); // تبديل إظهار وإخفاء القائمة  
            menuBtn.classList.toggle('active'); // تبديل حالة زر القائمة  
}
// script.js

// بيانات اللاعبين
const players = [
    {
        name: 'موسى سو',
        position: 'الهجوم',
        image: 'موسى سو.jpg'
    },
    {
        name: 'رمضان تلالة',
        position: 'الجناح الأيمن',
        image: 'player2.png.jpg'
    },
    {
        name: 'أمين الصبار',
        position: 'الوسط',
        image: 'امين الصبار.jpg'
    },
    {
        name: 'يونس أبو عجاجة',
        position: 'الدفاع',
        image: 'يونس ابوعجاجة.jpg '
    },
    {
        name: 'إلياس التلوع',
        position: 'الدفاع',
        image: 'الياس التلوع.jpg'
    },
    {
        name: 'محمد التائب',
        position: 'ظهير الأيمن',
        image: 'محمد التائب.jpg'
    },
    {
        name: 'عبدالرزاق الشيباني',
        position: 'الدفاع',
        image: 'عبد الرزاق الشيباني.jpg'
    },
    {
        name: 'يسري حمزة',
        position: 'الهجوم',
        image: 'يسري حمزة.jpg'
    },
    {
        name: 'دجيدجي فريد',
        position: 'الوسط',
        image: 'دجيدجي.jpg'
    },
    {
        name: 'محمد مختار',
        position: 'الوسط',
        image: 'محمد مختار(بشة الصغير).jpg'
    },
    {
        name: 'محمد سرب',
        position: 'ظهير أيسر',
        image: 'محمد سرب.jpg'
    },
    {
        name: 'معاد صالح',
        position: 'جناح أيسر',
        image: 'معاد صالح.jpg'
    },
    {
        name: 'معاد كازوز',
        position: 'حارس',
        image: 'معاد كازوز2.jpg'
    },
    {
        name: 'رواد الحمروني',
        position: 'دفاع',
        image: 'رواد الحمروني .jpg'
    },
    {
        name: 'علاء التلوع',
        position: 'مهاجم',
        image: 'علاء التلوع.jpg'
    },
    {
        name: 'علي العائب',
        position: 'مهاجم',
        image: 'علي العائب.jpg'
    },
    {
        name: 'مروان المحروق',
        position: 'الوسط',
        image: 'مروان المحروق.jpg'
    },
    {
        name: 'طه عبود',
        position: 'الوسط',
        image: 'طه عبود.jpg'
    },
    {
        name: 'عبد الحكيم كريم',
        position: 'الوسط',
        image: 'عبد الحكيم كريم.jpg'
    },
];

let currentPlayerIndex = 0;

function updatePlayerInfo() {
    document.getElementById('player-name').innerText = players[currentPlayerIndex].name;
    document.getElementById('player-position').innerText = players[currentPlayerIndex].position;
    document.getElementById('player-image').src = players[currentPlayerIndex].image;
}

// التنقل إلى اللاعب السابق
function prevPlayer() {
    currentPlayerIndex = (currentPlayerIndex === 0) ? players.length - 1 : currentPlayerIndex - 1;
    updatePlayerInfo();
}

// التنقل إلى اللاعب التالي
function nextPlayer() {
    currentPlayerIndex = (currentPlayerIndex === players.length - 1) ? 0 : currentPlayerIndex + 1;
    updatePlayerInfo();
}
