import { ProductDetails } from "../components/Product";
import { Main } from "../components/Main";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      name
      slug
      price
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  console.log("data: ", data);
  if (loading) {
    return <Main>Loading...</Main>;
  }
  if (error) {
    return (
      <Main>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </Main>
    );
  }
  return (
    <Main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Main>
  );
};

export default HomePage;
