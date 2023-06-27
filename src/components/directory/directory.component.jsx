import { styled } from "styled-components";
import DirectoryItem from "../directory-item/directory-item.component";
const categories = [
  {
    id: 1,
    title: "Cafe",
    imageUrl:
      "https://th.bing.com/th/id/OIP.VJn01dSlBU94yNGF7jJXIwHaE8?pid=ImgDet&rs=1",
    route: "shop/cafe",
  },
  {
    id: 2,
    title: "Cake",
    imageUrl:
      "https://th.bing.com/th/id/OIP.-P-kgafEiuGkZ8a_RGLMtwHaHa?pid=ImgDet&rs=1",
    route: "shop/cake",
  },
  {
    id: 3,
    title: "Small Bites",
    imageUrl:
      "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/07/the-best-taiwanese-fried-chicken-recipe-4449w.jpg",
    route: "shop/small%20bites",
  },
  {
    id: 4,
    title: "Tea",
    imageUrl:
      "https://th.bing.com/th/id/OIP.A2I0x_I5GDNuO2LzjdhHXwHaE8?pid=ImgDet&rs=1",
    route: "tea",
  },
];
const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(229, 244, 244);
`;
