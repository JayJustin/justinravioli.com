async function loadPosts() {
  const res = await fetch('posts.json');
  const posts = await res.json();

  posts.sort((a,b) => new Date(b.date) - new Date(a.date));

  const container = document.getElementById('posts');
  container.innerHTML = "";

  posts.slice(0,2).forEach(post => {
    const el = document.createElement('a');
    el.href = post.url;
    el.className = 'card post-link';
    el.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.description}</p>
    `;
    container.appendChild(el);
  });
}

loadPosts();