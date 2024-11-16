// 获取URL中的movie参数
const urlParams = new URLSearchParams(window.location.search);
const movie = urlParams.get('movie');

// 定义电影数据（视频源、名称、简介和评论）


// 根据movie参数加载相应的内容
if (movie && movieData[movie]) {
    const data = movieData[movie];
    document.getElementById('movie-title').textContent = data.title;
    document.getElementById('movie-source').src = data.videoSrc;
    document.getElementById('movie-description').textContent = data.description;

    // 加载评论
    const commentsList = document.getElementById('comments-list');
    const noComments = document.getElementById('no-comments');
    if (data.comments.length > 0) {
        noComments.style.display = 'none';
        data.comments.forEach(comment => {
            const commentItem = document.createElement('div');
            commentItem.classList.add('comment-item');
            commentItem.innerHTML = `<p><strong>用户:</strong> ${comment}</p>`;
            commentsList.appendChild(commentItem);
        });
    } else {
        noComments.style.display = 'block';
    }
}
// 模拟用户信息
const user = {
    username: "用户123", // 用户名
    avatar: "images/user-avatar.png" // 用户头像
};

document.getElementById('submit-comment').addEventListener('click', function() {
    const commentText = document.getElementById('comment-text').value.trim();
    console.log("添加的评论:", newComment);  // 检查评论元素是否正确创建
    if (commentText) {
        // 创建评论项
        const newComment = document.createElement('div');
        newComment.classList.add('comment-item');

        // 评论内容HTML结构
        newComment.innerHTML = `
            <div class="comment-header">
                <img src="${user.avatar}" alt="用户头像" class="comment-avatar">
                <strong>${user.username}</strong>
            </div>
            <p class="comment-body">${commentText}</p>
        `;

        // 添加到评论列表
        const commentsList = document.getElementById('comments-list');
        commentsList.appendChild(newComment);

        // 清空输入框
        document.getElementById('comment-text').value = '';
    }
});
