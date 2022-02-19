import Booklist from "./components/Booklist";
import AddBook from "./components/AddBook";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
//apollo client setup
const client = new ApolloClient({
  uri: 'https://graphql-tasin-book.herokuapp.com/graphql'
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <Booklist/>
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
