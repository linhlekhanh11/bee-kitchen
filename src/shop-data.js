
const SHOP_DATA = [
  {
    title: "Cake",
    items: [
      {
        id: 1,
        name: "Brownie Cookie",
        imageUrl:
          "https://mikebakesnyc.com/wp-content/uploads/2018/12/Fudgy-Brownie-Crinkle-Cookies-5-scaled.jpg",
        price: 5,
      },
      {
        id: 2,
        name: "Oreo Creaam Puff",
        imageUrl:
          "https://en.cooking-tree.com/wp-content/uploads/2023/05/Oreo-Cookie-Choux-Cream-puff-Recipe72-585x329.webp",
        price: 6,
      },
      {
        id: 3,
        name: "Mango Mousse",
        imageUrl:
          "https://www.dessertfortwo.com/wp-content/uploads/2021/05/mango-mousse-2.jpg",
        price: 6,
      },
      {
        id: 4,
        name: "Pandan Honeycomb Cake",
        imageUrl:
          "https://th.bing.com/th/id/R.92f0cef07c3a153dd7ef8c1b8452a419?rik=5kF9NJP6OmvwbQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Ndng3xvN0tQ%2fUUVXFtPErvI%2fAAAAAAAAFIQ%2f9X0ZqSHw6pY%2fs1600%2fbanh%2bbo%2b7.jpg&ehk=eAjCkOg%2b2usEj00g4xo5hTwAU7ranJ4%2fZjgCdmrb8SE%3d&risl=&pid=ImgRaw&r=0",
        price: 15,
      },
      {
        id: 5,
        name: "Cream Puff",
        imageUrl:
          "https://www.theflavorbender.com/wp-content/uploads/2021/02/Cream-puffs-2728.jpg",
        price: 5,
      },
      {
        id: 6,
        name: "Greentea Basque Cheesecake",
        imageUrl:
          "https://en.cooking-tree.com/wp-content/uploads/2023/02/Green-Tea-Matcha-Basque-Cheesecake-Recipe-Cooking-tree-43-585x329.jpg",
        price: 24,
      },
      {
        id: 7,
        name: "Blueberry Pound Cake",
        imageUrl:
          "https://en.cooking-tree.com/wp-content/uploads/2023/06/Blueberry-Pound-Cake-Recipe90-1170x658.webp",
        price: 8,
      },
      {
        id: 8,
        name: "Egg Tart",
        imageUrl:
          "https://en.cooking-tree.com/wp-content/uploads/2023/02/Egg-Tart-Recipe-Cooking-tree-83-585x329.jpg",
        price: 4,
      },
      {
        id: 9,
        name: "Melon Crepe Roll Cake",
        imageUrl:
          "https://en.cooking-tree.com/wp-content/uploads/2023/05/Melon-Crepe-Roll-Cake-Recipe117-1170x658.webp",
        price: 16,
      },
    ],
  },
  {
    title: "Small Bites",
    items: [
      {
        id: 10,
        name: "Popcorn chicken",
        imageUrl: "https://bing.com/th?id=OSK.1a897676a7397c9910a088ab6085c14d",
        price: 125,
      },
      {
        id: 11,
        name: "Seasoned French Fries",
        imageUrl: "https://bing.com/th?id=OSK.79551c018151568fc3e27e85960f73c2",
        price: 90,
      },
      {
        id: 12,
        name: "Vietnamese Banh Mi",
        imageUrl:
          "https://th.bing.com/th/id/R.953409bd87f4829a594a96fa67effc56?rik=RRpvMzp%2f%2f92aDw&riu=http%3a%2f%2fbloximages.newyork1.vip.townnews.com%2ffeastmagazine.com%2fcontent%2ftncms%2fassets%2fv3%2feditorial%2fa%2ff4%2faf495588-1b45-11e5-aee5-273201f13e05%2f558c0ec5397aa.image.jpg%3fresize%3d1200%2c800&ehk=aSWnPTe5kY3t4RBL%2bRnmQ9SLIYSv36DFul4Lij4B%2fp8%3d&risl=&pid=ImgRaw&r=0",
        price: 9,
      },
      {
        id: 21,
        name: "Korean Cheese Corn Dog",
        imageUrl:
          "https://th.bing.com/th/id/OIP.jU7yPbEBtwJuA5aPOF7s7wAAAA?pid=ImgDet&rs=1",
        price: 9,
      },
    ],
  },
  {
    title: "Cafe",
    items: [
      {
        id: 13,
        name: "Vietnamese Coffee",
        imageUrl:
          "https://th.bing.com/th/id/OIP.Nf-GPfLpM9LZTeXvs7wrVgHaLH?pid=ImgDet&rs=1",
        price: 6,
      },

      {
        id: 14,
        name: "Nutella Hot Chocolate",
        imageUrl:
          "https://en.cooking-tree.com/wp-content/uploads/2022/07/Nutella-Hot-Chocolate-Cooking-tree-13-1170x658.jpg",
        price: 7,
      },
      {
        id: 15,
        name: "Hot Cappucino",
        imageUrl:
          "https://th.bing.com/th/id/OIP.JBBAPZUxiQ2hs8GgKX7EvgHaHa?pid=ImgDet&rs=1",
        price: 5,
      },
      {
        id: 16,
        name: "Kiwi Jelly Ade",
        imageUrl:
          "https://en.cooking-tree.com/wp-content/uploads/2022/07/Kiwi-Jelly-Ade-Cooking-tree-15-1170x658.jpg",
        price: 190,
      },
    ],
  },

  {
    title: "Tea",
    items: [
      {
        id: 17,
        name: "Green Milk Tea",
        imageUrl:
          "https://be-your-own-barista.com/wp-content/uploads/2019/11/Iced-Matcha-Green-Tea-Latte-768x768.png",
        price: 5,
      },
      {
        id: 18,
        name: "Grapefruit Greentea",
        imageUrl:
          "https://uploads-ssl.webflow.com/5cf04dfa5de321f9e83759da/5cf5b74d5c5c34fd76d15552_Grapefruit_GT_menu.jpg",
        price: 8,
      },
      {
        id: 19,
        name: "Peach Ice Tea",
        imageUrl:
          "https://en.cooking-tree.com/wp-content/uploads/2022/08/REAL-Peach-Iced-Tea-Recipe-Cooking-tree-46-1170x658.jpg",
        price: 6,
      },
      {
        id: 20,
        name: "Chocolate Bubble Tea",
        imageUrl:
          "https://en.cooking-tree.com/wp-content/uploads/2022/06/6074-How-to-make-Chocolate-bubble-tea-Cooking-tree-1170x658.jpg",
        price: 6,
      },
    ],
  },
];

export default SHOP_DATA;