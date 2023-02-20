import { Component } from "react";
import ArticleList from "./ArticleList";
import { fetchArticlesByTopic } from "./api";

class App extends Component {
  state = {
    articles: [],
    topic: "react",
    isLoading: false,
    error: null,
  };
  
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
       const response = await fetchArticlesByTopic(this.state.topic)
    // console.log("response", response)
    this.setState({articles: response, isLoading: false})
    } catch (error) {
      console.log("Error: ", error);
      this.setState({error})
    } finally {
      this.setState({isLoading:false})
    }
   
  }
  updateArticles = (topic) => {
    console.log("updateArticles: ", topic)
    this.setState({ topic, isLoading: true }, async () => {
      const response = await fetchArticlesByTopic(this.state.topic);
      this.setState({ articles: response, isLoading: false });

    })
  }

  render() {
    const {articles, isLoading,error}=this.state
    return (
      <>
        <h1>Hello</h1>
        <button onClick={() => this.updateArticles("react")}>React</button>
        <button onClick={()=> this.updateArticles("css")}>Css</button>

        {error && <div>Something went wrong....</div>}
        {isLoading ? (
          <p>Please wait...</p>
        ) : (
            <div>
              {articles.length > 0 && (
                <ArticleList articles={articles} topic={this.state.topic} />
              )}
            </div>
        )}
        
        
      </>
    )
  }
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <>
//         <h1>Hello!!</h1>
//         <Counter callWhenReady={()=> console.log("ok, ready!!!")} />
//       </>
//     )
//   }
// }
export default App;