import { graphql } from "react-apollo";
import {bookDetails} from '../queries/queries'

function BookDetails(props){
    const { book } = props.data;
    return (
        <div id="book-details">
            {
                book ? (
                    <div>
                        <h2>{book.name}</h2>
                        <p className="au">{book.genre}</p>
                        <p className="au">{book.author.name}</p>
                        <p>All book by this author:</p>
                        <ul className="other-books">
                            {
                                book.author.books.map(item=>(
                                    <li className="tasin" key={item.id}>{item.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                ) : (
                    <div>No book selected...</div>
                )
            }
        </div>
    )
}

export default graphql(bookDetails,{
    options: (props)=>{
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);