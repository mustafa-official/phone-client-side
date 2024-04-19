import { Link, useLoaderData } from "react-router-dom";

const AllPhones = () => {
  const phones = useLoaderData();

  return (
    <div>
      <h3>All Phones </h3>
      {phones.map((phone) => (
        <li key={phone.id}>
          <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default AllPhones;
