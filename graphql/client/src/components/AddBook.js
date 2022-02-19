import {  useState } from 'react';
import { graphql} from 'react-apollo';
import {flowRight as compose} from 'lodash';
import {getAuthorsQuery, getBooksQuery, addBookMutation} from '../queries/queries';

const Book = {
    name : '',
    genre: '',
    authorId: ''
}

function AddBook(props){
    const [books, setBooks] = useState(Book);
    const data = props.getAuthorsQuery;
    const handleChanger = (e)=>{
        setBooks({...books, [e.target.name]: e.target.value});
    }
    const handlerClick = (e)=>{
        e.preventDefault();
        props.addBookMutation({
            variables: {
                name: books.name,
                genre: books.genre,
                authorId: books.authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }
    return(
        <form>
            <div className="field">
                <label>Book name</label>
                <input type="text" name="name" value={books.name} onChange={e=>handleChanger(e)} />
            </div>
            <div className="field">
                <label>Genre</label>
                <input type="text" name="genre" value={books.genre} onChange={e=>handleChanger(e)} />
            </div>
            <div className="field">
                <label>Author</label>
                <select name="authorId" onChange={e=>handleChanger(e)}>
                    <option>Select author</option>
                    {
                        data.loading ? (<option disabled>Loading Authors</option>) : (<> {data.authors.map(author => (<option key={author.id} value={author.id}>{author.name}</option>))} </>)
                    }
                </select>
            </div>
            <button type="button" onClick={e=>handlerClick(e)}>+</button>
        </form>
    );
}

export default compose(
    graphql(getAuthorsQuery,{name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);