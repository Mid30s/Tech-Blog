const { Comment } = require("../models");

const commentData = [
  {
    comment_text:
      "Great post! I think quantum computing is going to be a game changer in many industries.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "AI is definitely a powerful tool in cybersecurity. Do you think it will ever be able to replace human experts completely?",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      "I can't wait for 5G networks to become more widespread. The potential for faster speeds and more reliable connections is really exciting!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text:
      "The IoT is definitely changing the game for many industries. Do you think it will also have an impact on consumer products like smart homes and wearables?",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text:
      "I'm excited to see what the future holds for self-driving cars. Do you think we will ever reach a point where all cars on the road are fully autonomous?",
    user_id: 5,
    post_id: 5,
  },
  {
    comment_text:
      "I'm really interested in the potential of blockchain for supply chain management. Do you think it will also have applications in other areas like healthcare and finance?",
    user_id: 1,
    post_id: 6,
  },
  {
    comment_text:
      "The ethics of AI are definitely a concern. What steps do you think organizations can take to ensure that AI is used ethically?",
    user_id: 2,
    post_id: 7,
  },
  {
    comment_text:
      "Big data is definitely a valuable resource for businesses. Do you think it will become even more important in the future?",
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text:
      "Virtual reality is a really exciting technology, especially when it comes to gaming. Do you think it will also have applications in other areas like education and healthcare?",
    user_id: 4,
    post_id: 9,
  },
  {
    comment_text:
      "Cloud computing has definitely helped my small business save money on IT costs. However, I do worry about security. What measures can small businesses take to protect their data in the cloud?",
    user_id: 5,
    post_id: 10,
  },
  {
    comment_text:
      "I agree that quantum computing has a lot of potential. It will be interesting to see how it develops over the next few years.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "AI can definitely augment the capabilities of human experts in cybersecurity, but I don't think it will ever fully replace them.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      "I think 5G networks will be especially important for the development of autonomous vehicles and other IoT devices.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text:
      "The IoT has already had a big impact on consumer products, and I think we will see even more innovation in the coming years.",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text:
      "Self-driving cars have a lot of potential to make our roads safer and reduce traffic congestion.",
    user_id: 5,
    post_id: 5,
  },
  {
    comment_text:
      "Blockchain has already been used in a variety of industries, and I think we will continue to see its applications expand in the future.",
    user_id: 1,
    post_id: 6,
  },
  {
    comment_text:
      "I think transparency and accountability are key when it comes to the ethical use of AI.",
    user_id: 2,
    post_id: 7,
  },
  {
    comment_text:
      "Big data is already a huge industry, and I think it will only continue to grow as more companies realize its potential.",
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text:
      "I can definitely see virtual reality being used in education and healthcare in the future.",
    user_id: 4,
    post_id: 9,
  },
  {
    comment_text:
      "Small businesses should make sure to use strong passwords and two-factor authentication when using cloud services, and they should also consider encrypting their data.",
    user_id: 5,
    post_id: 10,
  },
  {
    comment_text:
      "I think quantum computing is still in its early stages, but it has a lot of potential to solve problems that are currently unsolvable.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "AI is already being used to automate many tasks in cybersecurity, and I think we will see even more innovation in this area in the future.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text:
      "5G networks will also be important for the development of smart cities and other urban infrastructure.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text:
      "The IoT has the potential to improve efficiency and reduce waste in many industries.",
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text:
      "I think self-driving cars will be especially important for people with disabilities who are unable to drive themselves.",
    user_id: 5,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
