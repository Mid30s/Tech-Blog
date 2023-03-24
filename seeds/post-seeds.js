const { Post } = require("../models");

const postData = [
  {
    title: "The Future of Quantum Computing",
    content:
      "Quantum computing has the potential to revolutionize the way we process information. In this post, we will explore the future of quantum computing and how it is poised to transform industries such as healthcare, finance, and more.",
    user_id: 1,
  },
  {
    title: "The Role of Artificial Intelligence in Cybersecurity",
    content:
      "As cyber threats become increasingly sophisticated, many organizations are turning to artificial intelligence to help detect and prevent attacks. In this post, we will examine the role of AI in cybersecurity and how it can help organizations stay one step ahead of cyber criminals.",
    user_id: 2,
  },
  {
    title: "How 5G Networks Will Change the Game for Mobile Technology",
    content:
      "5G networks have been touted as the next big thing in mobile technology. In this post, we will take a closer look at how 5G networks will change the game for mobile technology, from faster download speeds to new applications and use cases.",
    user_id: 3,
  },
  {
    title: "The Rise of the Internet of Things",
    content:
      "The Internet of Things (IoT) has been growing rapidly in recent years, with more and more devices becoming connected to the internet. In this post, we will explore the rise of the IoT and how it is transforming industries such as healthcare, manufacturing, and more.",
    user_id: 4,
  },
  {
    title: "The Benefits and Risks of Self-Driving Cars",
    content:
      "Self-driving cars have the potential to make our roads safer and more efficient. However, they also come with a number of risks and ethical concerns. In this post, we will examine the benefits and risks of self-driving cars and what the future of transportation may look like.",
    user_id: 5,
  },
  {
    title: "The Impact of Blockchain on Supply Chain Management",
    content:
      "Blockchain technology has the potential to transform supply chain management by increasing transparency, reducing costs, and improving efficiency. In this post, we will take a closer look at the impact of blockchain on supply chain management and how it is changing the game for businesses.",
    user_id: 1,
  },
  {
    title: "The Ethics of Artificial Intelligence",
    content:
      "As AI becomes more advanced, it raises a number of ethical concerns around issues such as bias, privacy, and the impact on jobs. In this post, we will explore the ethics of artificial intelligence and what steps organizations can take to ensure that AI is used ethically and responsibly.",
    user_id: 2,
  },
  {
    title: "The Role of Big Data in Business",
    content:
      "Big data has become a buzzword in recent years, but what does it really mean for businesses? In this post, we will examine the role of big data in business and how it can be used to gain insights, make better decisions, and drive growth.",
    user_id: 3,
  },
  {
    title: "The Impact of Virtual Reality on the Entertainment Industry",
    content:
      "Virtual reality is changing the way we experience entertainment, from immersive gaming experiences to virtual concerts and events. In this post, we will explore the impact of virtual reality on the entertainment industry and what the future may hold.",
    user_id: 4,
  },
  {
    title: "The Pros and Cons of Cloud Computing for Small Businesses",
    content:
      "Cloud computing has become increasingly popular among small businesses in recent years. However, it is not without its drawbacks. In this post, we will examine the pros and cons of cloud computing for small businesses, so you can make an informed decision about whether it is the right choice for your organization.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
