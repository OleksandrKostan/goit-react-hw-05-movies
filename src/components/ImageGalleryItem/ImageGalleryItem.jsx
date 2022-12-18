import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ movie: { id, poster_path,original_title,title,release_date }, onClick }) => (
  <li className={css.ImageGalleryItem} id={id} onClick={onClick}>

    <img
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={original_title} 
      className={css.ImageGalleryItem_image}
    /> <div> <h1>{title}</h1> <p>{release_date}</p>
                            </div>
  </li>
);

ImageGalleryItem.propTypes = {
  movies:  PropTypes.shape({
            id: PropTypes.number.isRequired,
            tags: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired
        }),

  onClick: PropTypes.func.isRequired,
};