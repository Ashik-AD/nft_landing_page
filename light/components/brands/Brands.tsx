import Image from "next/image";
import Style from "../../../styles/light/Home.module.css";
const Brands = () => {
  const lists = [
    {
      id: 1,
      logo: "/../public/brands/adidas.png",
      name: "Adidas",
      url: "https://adida.com",
    },
    {
      id: 2,
      logo: "/../public/brands/nike.png",
      name: "Nike",
      url: "https://adida.com",
    },
    {
      id: 3,
      logo: "/../public/brands/fila.png",
      name: "Fila",
      url: "https://fila.com",
    },
    {
      id: 4,
      logo: "/../public/brands/new_holland.png",
      name: "New Holland",
      url: "https://newholand.com",
    },
    {
      id: 5,
      logo: "/../public/brands/ritter_sport.png",
      name: "Ritter Sport",
      url: "https://rittersport.com",
    },
  ];
  return (
    <div
      className={`grid col-5 wrap content-center space-36 z-2 ${Style.brands} p-16`}
    >
      {lists.map((brand) => (
        <span className={Style.brand_item} key={brand.id}>
          <Image
            src={brand.logo}
            title={brand.name}
            alt={`${brand.name}_logo`}
            objectFit="contain"
            layout="fill"
          />
        </span>
      ))}
    </div>
  );
};

export default Brands;
