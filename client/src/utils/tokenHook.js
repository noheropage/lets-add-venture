import { useEffect, useState } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

export const useApi = (url, options = {}) => {
  const { getAccessTokenSilently } = this.props.auth0;
  const [state, setState] = useState({
    error: null,
    loading: true,
    data: null,
  });
  const [refreshIndex, setRefreshIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        
        const accessToken = await getAccessTokenSilently();
        const res = await axios(url, {
          
          headers: {
            
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setState({
          ...state,
          data: await res.data,
          
        });
      } catch (error) {
        setState({
          ...state,
          
        });
      }
    })();
  }, [refreshIndex]);

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  };
};