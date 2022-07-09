import Image from "next/image";
import Style from "../../../styles/dark/Home.module.css";
const Brands = () => {
  const lists = [
    {
      id: 1,
      logo: "https://i.ibb.co/30g0ms0/adidas.png",
      name: "Adidas",
      url: "https://adida.com",
    },
    {
      id: 2,
      logo: "https://i.ibb.co/1n3Qf5f/nike.png",
      name: "Nike",
      url: "https://adida.com",
    },
    {
      id: 3,
      logo: "https://i.ibb.co/pX6wTLd/fila.png",
      name: "Fila",
      url: "https://fila.com",
    },
    {
      id: 4,
      logo: "https://i.ibb.co/Xjm7bxh/new-holland.png",
      name: "New Holland",
      url: "https://newholand.com",
    },
    {
      id: 5,
      logo: "https://i.ibb.co/9tP3gng/ritter-sport.png",
      name: "Ritter Sport",
      url: "https://rittersport.com",
    },
  ];
  return (
    <div
      className={`grid col-5 content-center space-36 z-2 ${Style.brands} p-16`}
    >
      {lists.map((brand) => (
        <span className={`relative ${Style.brand_item}`} key={brand.id}>
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
