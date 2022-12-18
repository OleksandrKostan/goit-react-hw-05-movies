import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image: { id, poster_path,tags,largeImageURL }, onClick }) => (
  <li className={css.ImageGalleryItem} id={id} onClick={onClick}>
    <img
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={tags}
      name={largeImageURL}
      className={css.ImageGalleryItem_image}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image:  PropTypes.shape({
            id: PropTypes.number.isRequired,
            tags: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired
        }),

  onClick: PropTypes.func.isRequired,
};