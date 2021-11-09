import { BrowserRouter as Router, Route, Link } from './router/react-router-dom/'
import './App.css'

const Home = () => (
    <>
        <h1>首页</h1>
    </>
)

const Detail = () => (
    <>
        <h1>详情页</h1>
    </>
)
function App() {
    return (
        <div className="App">
            <Router>
                <div className="navs">
                    <Link to="/">home</Link>
                    <Link to="/detail">detail</Link>
                </div>
                <div className="view">
                    <Route exact path="/" component={Home} />
                    <Route path="/detail" component={Detail} />
                </div>
            </Router>
        </div>
    )
}

export default App
