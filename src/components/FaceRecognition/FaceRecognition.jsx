import './FaceRecognition.css';
import DOMPurify from "dompurify";

const FaceRecognition = ({ image, boxes, handleImageLoad, imageRef }) => {

    // 1. Validate type
    const safeImage = typeof image === "string" ? image : "";

    // 2. Sanitize URL
    const sanitizedImage = DOMPurify.sanitize(safeImage);

    let finalImage = "";
    try {
        const url = new URL(sanitizedImage);

        // 3. Allow only http/https
        const isSafeProtocol = ["https:", "http:"].includes(url.protocol);

        // 4. Allow only safe image extensions (block SVG)
        const allowedExtensions = /\.(jpg|jpeg|png|webp|gif|bmp)$/i;
        const isSafeExtension = allowedExtensions.test(url.pathname);

        if (isSafeProtocol && isSafeExtension) {
            finalImage = sanitizedImage;
        } else {
            console.warn("Blocked unsafe image URL:", sanitizedImage);
        }
    } catch {
        console.warn("Invalid image URL provided");
    }

    return (
        <div className="center ma">
            <div className="absolute mt2">

                {finalImage && (
                    <img
                        id="inputImage"
                        ref={imageRef}
                        src={finalImage}
                        alt="uploaded image"
                        width="500px"
                        height="auto"
                        onLoad={handleImageLoad}
                    />
                )}

                {boxes.map((box) => (
                    <div
                        key={box.id}
                        className="bounding-box"
                        style={{
                            top: box.topRow,
                            right: box.rightCol,
                            bottom: box.bottomRow,
                            left: box.leftCol,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default FaceRecognition;
