import axios from 'axios';
import Swal from 'sweetalert2';

// get All Recipe
export const getPortofolioByUser = (setPortofolio, id) => async (dispatch) => {
  try {
    axios.get(`${process.env.API_BACKEND}portofolio/worker/${id}`).then((response) => {
      setPortofolio(response.data.data);
    });
    dispatch({ type: 'GET_PORTFOLIO_BY_USER', payload: 'success' });
  } catch (error) {
    Swal.fire({
      //   text: `${error.response.data.message}`,
      icon: 'warning',
    });
  }
};
