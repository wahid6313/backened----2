const express = require('express');
const reviewcontroller = require('./../Controller/reviewController');
const authController = require('./../Controller/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(reviewcontroller.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewcontroller.createReviews,
  );

router.route('/:id').delete(reviewcontroller.deleteReview);

module.exports = router;
