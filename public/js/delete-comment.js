document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".delete-comment");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const commentId = button.getAttribute("data-comment-id");

      try {
        const response = await fetch(`/api/comments/${commentId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          location.reload();
        } else {
          alert("🚫🚫🚫🚫You can not delete other's comment!🚫🚫🚫🚫");
        }
      } catch (error) {
        console.error(error);
      }
    });
  });
});
