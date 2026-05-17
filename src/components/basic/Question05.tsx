const DynamicImage:React.FC = () => {
  const imageUrl = "https://placehold.co/150";
  const altText = "サンプル画像";
  const baseWidth = 150;
  const isLarge = true;
  const actualWidth = isLarge ? baseWidth * 2 : baseWidth;
  const actualData = isLarge ? "large" : "small"

  return (
    <div>
      <img 
        src = {imageUrl}
        alt = {altText}
        width = {actualWidth}
        date-size = {actualData}        
      />
    </div>
  );
}
 
export default DynamicImage;