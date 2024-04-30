import { useState, useEffect } from "react";
import apiKey from "../../../api-key";
import { Loading } from "../loading/loading";

export const SpaceCard = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const roverApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2024-1-21&api_key=${apiKey}`;

        fetch(roverApi)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setPhotos(data.photos.slice(0, 10)); // Begränsar arrayen till att visa de 10 första objekten
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    return (
        <div className="container">
            <div className="photo-wrapper">
                {photos.map(photo => (
                    <div key={photo.id} className="card">
                        <h3>{photo.rover.name}</h3>
                        <img src={photo.img_src} alt={photo.camera.full_name} />
                        <p>{photo.earth_date}</p>
                    </div>
                ))}
                </div>
            </div>
    );
};
