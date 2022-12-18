import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ movies, onClick }) => (
  <ul className={css.ImageGallery}>
    {movies.map((movie, id) => (
      <ImageGalleryItem onClick={onClick} movie={movie} key={id} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  onClick: propTypes.func.isRequired,
};