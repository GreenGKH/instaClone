const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main");

for(let i = 0; i < posts.length; i++) {
    mainEl.innerHTML += `
        <!-- Post ${i} -->
        <section class="user-profil">
            <img src="${posts[i].avatar}" alt="user avatar" class="avatar">
            <div class="right">
                <h1>${posts[i].name}"</h1>
                <p>"${posts[i].location}"</p>
            </div>
        </section>
        <section class="post">
            <img src="${posts[i].post}" alt="${posts[i].name} post" class="post">
        </section>
        <section class="interaction-section">
            <div class="interaction">
                <img src="images/icon-heart.png" alt="Like icon" class="icon">
                <img src="images/icon-comment.png" alt="Comment icon" class="icon">
                <img src="images/icon-dm.png" alt="Share icon" class="icon">
            </div>
            <p class="likes bold">${posts[i].likes} likes</p>
            <p class="comment"> <span class="bold">${posts[i].username} </span>${posts[i].comment}</p>
        </section>
`}
