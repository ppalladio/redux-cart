import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
//#line 2-3 to provice the reducer to the whole app using provider and wrap APP()
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
