import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => (
  <div className="image-list">
    {images.map(img => (
      <ImageCard key={img.id} image={img} />
    ))}
  </div>
);

export default ImageList;
