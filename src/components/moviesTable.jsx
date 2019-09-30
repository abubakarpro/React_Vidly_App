import React from 'react';
import TableRow from './tableRow'



const MoviesTable = (props) => {

    const { movies, onDelete, onLike } = props;
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => (
                    <TableRow key={movie._id} movie={movie} onLike={onLike} onDelete={onDelete} />

                ))}
            </tbody>
        </table>
    );
}

export default MoviesTable;