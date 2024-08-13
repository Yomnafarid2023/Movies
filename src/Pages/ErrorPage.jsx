import { Link } from 'react-router-dom';
import '../Styles/ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/">Go back to Home</Link>
        </div>
    );
}

export default ErrorPage;
