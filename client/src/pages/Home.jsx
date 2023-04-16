import React, { useContext } from 'react';
import uuid from 'react-uuid';
import { Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function Home() {
  const { isLoading, products } = useContext(AppContext);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Grid
          container
          columnGap={2}
          rowGap={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
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
        </Grid>
      </main>
    </div>
  );
}

export default Home;
