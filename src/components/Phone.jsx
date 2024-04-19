import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const singlePhone = useLoaderData();
  console.log(singlePhone);

  return (
    <div>
      <h2>{singlePhone.name}</h2>
      <div>
        <img src={singlePhone.image} alt="Naii" />
      </div>
    </div>
  );
};

export default Phone;
