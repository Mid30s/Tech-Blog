async function newPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();

  if (title && body) {
    const response = await fetch("/api/posts", {
      method: "post",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

async function deletePostHandler(event) {
  if (event.target.matches(".delete-post")) {
    const id = event.target.getAttribute("data-id");
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newPostHandler);
document
  .querySelector(".post-container")
  .addEventListener("click", deletePostHandler);
