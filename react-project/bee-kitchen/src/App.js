import "./categories.styles.scss";
import CategoryItem from "./components/category-item/category-item.component";
import CategoryList from "./components/category-list/category-list.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Pastry",
      imageUrl:
        "https://img.taste.com.au/HFI3WISt/w643-h428-cfill-q90/taste/2018/03/apr-18_apple-blueberry-pie-with-cinnamon-pastry-3000x2000-136232-1.jpg",
    },
    {
      id: 2,
      title: "Cake",
      imageUrl:
        "https://th.bing.com/th/id/OIP.-P-kgafEiuGkZ8a_RGLMtwHaHa?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      title: "Small Bites",
      imageUrl:
        "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/07/the-best-taiwanese-fried-chicken-recipe-4449w.jpg",
    },
    {
      id: 4,
      title: "Milk Tea",
      imageUrl:
        "https://th.bing.com/th/id/OIP.A2I0x_I5GDNuO2LzjdhHXwHaE8?pid=ImgDet&rs=1",
    },
    {
      id: 5,
      title: "Cafe",
      imageUrl:
        "https://th.bing.com/th/id/OIP.VJn01dSlBU94yNGF7jJXIwHaE8?pid=ImgDet&rs=1",
    },
  ];
  return (
    <div className="categories-container">
      {/* {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))} */}
      <CategoryList categories={categories}/>
    </div>
  );
};

export default App;
