import React from 'react';
import { Link } from 'react-router-dom';
import Like from "../common/like"



const Row = (props) => {
    const { movie, onLike, onDelete } = props;
    return (<tr key={movie._id}>
        <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>

        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
            <Like
                liked={movie.liked}
                onClick={() => onLike(movie)}
            />
        </td>
        <td>
            <button
                className="btn-danger"
                onClick={() => onDelete(movie)}
            >
                Delete
</button>
        </td>
    </tr>);
}

export default Row;