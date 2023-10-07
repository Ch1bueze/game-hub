import noImage from "../assets/GameHub Resources/Image Placeholder/no-image-placeholder-6f3882e0.webp";

const getCroppedUrl = (url: String) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedUrl;
