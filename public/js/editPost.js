async function editPostHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const body = document.querySelector("#body").value.trim();
  const id = document.querySelector("#post-id").value;

  if (title && body) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#edit-post-form")
  .addEventListener("submit", editPostHandler);
