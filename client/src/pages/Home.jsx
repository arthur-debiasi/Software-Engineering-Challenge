import React, { useContext } from 'react';
import uuid from 'react-uuid';
import { Divider, Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function Home() {
  const { isLoading, products, notFound } = useContext(AppContext);

  return (
    <div>
      <header>
        <Header />
      </header>
      <Divider />
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
          {notFound && (
            <Typography variant="overline">Não há resultados para o termo pesquidado.</Typography>
          )}
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
