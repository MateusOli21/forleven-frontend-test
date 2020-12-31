import { Provider } from 'react-redux';

import store from './store';
import Users from './components/Users';
import Todo from './components/Todo';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="content">
                    <Todo />
                    <Users />
                </div>
            </div>
        </Provider>
    );
}

export default App;
