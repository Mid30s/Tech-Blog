// async function newPostHandler(event) {
//   event.preventDefault();

//   const title = document.querySelector("#post-title").value.trim();
//   const content = document.querySelector("#post-body").value.trim();

//   if (title && content) {
//     const response = await fetch("/api/posts", {
//       method: "post",
//       body: JSON.stringify({
//         title,
//         content,
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

// document
//   .querySelector("#new-post-form")
//   .addEventListener("submit", newPostHandler);
