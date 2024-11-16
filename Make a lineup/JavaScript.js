// 选择所有具有 class 名称 'item' 的元素，并将其存储在 items 变量中
const items = document.querySelectorAll('.item');

// 选择左侧控制按钮，并将其存储在 prevButton 变量中
const prevButton = document.querySelector('.carousel-control.prev');

// 选择右侧控制按钮，并将其存储在 nextButton 变量中
const nextButton = document.querySelector('.carousel-control.next');

// 初始化当前索引为2，表示默认显示第三张图片
let currentIndex = 2;

// 调用函数以更新轮播的状态，确保初始状态正确
updateCarousel();

// 定义更新轮播状态的函数
function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');

        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.add(index === (currentIndex - 1 + items.length) % items.length ? 'prev' : 'next');
        }
    });
}

// 定义向左移动的函数
function shiftLeft() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

// 定义向右移动的函数
function shiftRight() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

// 为左侧控制按钮添加点击事件监听器，点击时执行向左移动函数
prevButton.addEventListener('click', shiftLeft);

// 为右侧控制按钮添加点击事件监听器，点击时执行向右移动函数
nextButton.addEventListener('click', shiftRight);

// 为每个轮播项添加点击事件监听器，点击时跳转到对应网页
items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) { // 只有在当前被放大时才跳转
            const url = item.getAttribute('data-url');
            if (url) {
                window.location.href = url; // 跳转到对应网页
            }
        }
    });
});
