document.addEventListener("DOMContentLoaded", function() {
    const allTags = document.querySelectorAll(".tag-button");

    // 为所有标签按钮绑定点击事件
    allTags.forEach(tag => {
        tag.addEventListener("click", function() {
            // 获取当前按钮的类别
            const category = tag.getAttribute("data-category");

            // 查找该类别下所有的按钮
            const categoryTags = document.querySelectorAll(`.tag-button[data-category="${category}"]`);

            // 如果点击的是已选中的标签，则取消选中
            if (tag.classList.contains("selected")) {
                tag.classList.remove("selected");
                return;
            }

            // 先取消所有标签的选中状态
            categoryTags.forEach(t => t.classList.remove("selected"));

            // 选中当前点击的标签
            tag.classList.add("selected");
        });
    });
});
