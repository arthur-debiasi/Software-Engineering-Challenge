import React, { useCallback, useState } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Header from '../components/Header';

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noQuery, setNoQuery] = useState(false);
  const [queryData, setQueryData] = useState({
    query: '',
    category: 'geladeira',
    web: 'all',
  });

  const handleQueryBtn = useCallback(() => {
    if (!queryData.query || queryData.query.replaceAll(' ', '') === '') {
      setNoQuery(true);
    } else {
      setNoQuery(false);
      setIsLoading(true);
      const { query, category, web } = queryData;
      axios
        .post('http://localhost:3001/', { query, category, web })
        .then(({ data }) => {
          setProducts(data);
          setIsLoading(false);
        });
    }
  }, [queryData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQueryData({ ...queryData, [name]: value });
  };

  return (
    <div>
      <header>
        <Header
          handleChange={handleChange}
          handleQueryBtn={handleQueryBtn}
          noQuery={noQuery}
        />
      </header>
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          products.map(({
            href, title, description, price, src,
          }) => (
            <ProductCard
              key={uuid()}
              src={src}
              href={href}
              title={title}
              description={description}
              price={price}
              isLoading={isLoading}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default Home;
