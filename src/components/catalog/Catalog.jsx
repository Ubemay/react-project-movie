import React, {useState} from 'react';
import FilmIcon from "../film-icon/FilmIcon";
import './catalogStyle.css';
import {getAll} from "../API/API";

const Catalog = () => {

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const page = 11;
    React.useEffect(() => {
        const fetchData = async (page) => {
            try {
                const data = await getAll(page);
                setFilms(data['films']);
            } catch (e) {
                console.log(e);
            }

            setLoading(false);
        }
        fetchData(page);
    }, []);

    return (
        <div className='App'>
            {loading && 'Loading...'}
            <div className="films">
                {films.map(film =>
                    <FilmIcon cover={film['posterUrlPreview']}
                              title={film['nameRu']}
                              genres={film['genres']}
                              rating={(Math.random() * 10).toFixed(1)}
                              key={film['filmId']}
                    />
                )}
            </div>

        </div>
    );
};

export default Catalog;