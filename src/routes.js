import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Todos from './pages/Todos';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todos/:page" component={Todos} />
        </Switch>
    );
};

export default Routes;
