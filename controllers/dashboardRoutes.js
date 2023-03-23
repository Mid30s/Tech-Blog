const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

// Get all posts for dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: User, attributes: ["name"] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log("rendering dashboard");
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// // New post route
// router.get("/new-post", withAuth, (req, res) => {
//   res.render("new-post", {
//     logged_in: req.session.logged_in,
//   });
// });

// edit post by id
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, attributes: ["name"] }],
    });

    const post = postData.get({ plain: true });

    res.render("editPost", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
