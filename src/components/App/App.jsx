import { useState, useEffect} from 'react';
 
import { ThemeProvider } from 'styled-components';
import { theme } from '../Styled/Theme';
import { GlobalStyle } from '../Styled/GlobalStyle';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from '../Searchbar/Searchbar';
import { FetchTrending } from 'services/Api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';




export function App() {
  const [movies, setMovies] = useState([ ]);
  const [isLoading, setIsLoading] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [Img, setImg] = useState('');
  const [Alt, setAlt] = useState('');
 
 
   useEffect(() => {
  
    setIsLoading(true);
    FetchTrending(page)
      .then(trendingMovies => { setMovies(prevState => [...prevState, ...trendingMovies]);
      })
      .catch(error => {
        toast.error(`${error.message}`);
      })
      .finally(() => setIsLoading(false));
  }, [page]);

  

  const handleSubmit = valueSearch => {
    setValueSearch(valueSearch);
    setMovies([]);
    setPage(1);
  };

  const handleClickImage = e => {
   
    setImg(e.target.name);
    setAlt(e.target.alt);
  };

  // const handleModalClose = () => {
  //   setModal(false);
  //   setImg('');
  //   setAlt('')
  // };

    return (<ThemeProvider theme={theme}> <GlobalStyle />
      <Searchbar onSubmit={handleSubmit} /><ToastContainer />
       {movies.length > 0 &&  <ImageGallery onClick={handleClickImage} movies={movies} />}
       {/* {isLoading && <Loader />} */}
       {/* {images.length > 0 && <Button onClick={() => {setPage(p => p + 1)}}  />} */}
       {/* {modal ? ( <Modal src={Img} alt={Alt} handleModalClose={handleModalClose}/>) : null} */}
   </ThemeProvider> );
  }
