import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
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

  const contextValue = useMemo(() => ({
    products, isLoading, noQuery, handleQueryBtn, handleChange,
  }), [products, isLoading, noQuery, handleQueryBtn, handleChange]);
  return (
    <AppContext.Provider
      value={contextValue}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
}.isRequired;
