import decode from 'jwt-decode';

class AuthService {
    // Get user profile from decoded token
    getProfile() {
        return decode(this.getToken());
    }

    // Check if user is logged in
    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }

    // Check if token is expired
    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    // Get token from local storage
    getToken() {
        return localStorage.getItem('id_token');
    }

    // Set token to local storage and redirect to home page
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        // Redirect to home page
        window.location.assign('/');
    }

    // Remove token from local storage and refresh page
    logout() {
        localStorage.removeItem('id_token');
        // Refresh page
        window.location.assign('/');
    }
}

export default new AuthService();
