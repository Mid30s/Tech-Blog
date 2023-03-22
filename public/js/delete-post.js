// Delete post
const deletePostHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector("input[name=id]").value;

  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post");
  }
};

document
  .querySelector("#delete-post-form")
  .addEventListener("submit", deletePostHandler);
