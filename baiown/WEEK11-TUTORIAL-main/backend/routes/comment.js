const express = require("express");
const path = require("path");
const pool = require("../config");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./static/uploads");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

// Get comment
router.get("/:blogId/comments", function (req, res, next) {});

// Create new comment
router.post(
  "/blogs/:blogId",
  upload.single("comment_image"),
  async function (req, res, next) {
    const blogId = req.params.blogId;
    const comment = req.body.comment;
    const like = req.body.like;
    const file = req.file;
    //   console.log(req.params.blogId);
    //   console.log(comment_by_id);

    const conn = await pool.getConnection();
    // Begin transaction
    await conn.beginTransaction();

    try {
      const [rows, fields] = await pool.query(
        `INSERT INTO comments (blog_id, comment, comments.like,  comment_by_id)
          VALUES (?, ?, 0, null)`,
        [blogId, comment]
      );

      console.log(file);
      const filePath = file ? file.path.substring(6) : "";

      const [row2, fields2] = await pool.query(
        `INSERT INTO IMAGES(blog_id, comment_id, file_path) VALUES(?, ?, ?)`,
        [blogId, rows.insertId, filePath]
      );

      res.redirect(`/blogs/${blogId}`);
      await conn.commit();
    } catch (error) {
      await conn.rollback();
    } finally {
      await conn.release();
    }
  }
);

// Update comment
router.put("/comments/:commentId", function (req, res, next) {
  return;
});

// Delete comment
router.delete("/comments/:commentId", function (req, res, next) {
  return;
});

// Delete comment
router.put("/comments/addlike/:commentId", function (req, res, next) {
  return;
});

exports.router = router;
