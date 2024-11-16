function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex"; // 使用 flex 布局以居中
    modalImg.src = element.src; // 设置模态框中的图片
    document.getElementById("caption").innerHTML = element.alt; // 设置图片标题
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none"; // 隐藏模态框
}
