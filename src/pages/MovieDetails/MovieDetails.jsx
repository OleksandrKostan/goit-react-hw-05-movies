import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { getMovieDetailsById } from '../../servises/getMovieDetailsById';
import { AboutFilm } from 'components/AboutFilm/AboutFilm';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

import { Section, WrapperDetails, LinkBack } from './MovieDetails.styled';


const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetailsById(movieId)
      .then(response => {
        setMovieDetails(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
     
      <Section>
        {location.state ? (
          <LinkBack to={backLinkHref}>Назад</LinkBack>
        ) : (
          <LinkBack to="/">Назад</LinkBack>
        )}

        <WrapperDetails>
          {isLoading && <Loader />}
          {error && <p>Опа, помилка:{error}</p>}

          {movieDetails && (
            <AboutFilm
              poster_path={poster_path}
              title={title}
              vote_average={vote_average}
              overview={overview}
              genres={genres}
            />
          )}
        </WrapperDetails>
      </Section>
     
      <Section>
        <AdditionalInfo />
      </Section>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
