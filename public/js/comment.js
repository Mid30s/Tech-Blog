// Add a comment to a post
const addCommentHandler = async (event) => {
  event.preventDefault();

  const commentBody = document.querySelector("#comment-body").value.trim();
  const postId = document.querySelector("#post-id").value.trim();

  if (commentBody) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment_body: commentBody,
        post_id: postId,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#add-comment-form")
  .addEventListener("submit", addCommentHandler);
