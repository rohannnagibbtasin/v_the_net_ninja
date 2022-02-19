import { useState } from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/queries'
import BookDetails from './BookDetails';

function Booklist({data}) {
    const [selected, setSelected] = useState(null);
    return (
        <div>
            <ul id="book-list">
                {
                    data.loading ? 
                    (<div>Loading books...</div>) : 
                    data.books.map(book=>(
                        <li key={Math.random()} onClick={e=>setSelected(book.id)}>{book.name}</li>
                    ))
                }
            </ul>
            <BookDetails bookId={selected} />
        </div>
    )
}

export default graphql(getBooksQuery)(Booklist);