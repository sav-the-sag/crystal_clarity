export default function Error() {
    return (
        <div className="error-container">
        <h2>Oops! Something went wrong.</h2>
        <p>We apologize for the inconvenience. Please try again later.</p>
        <p>Error Code: 500</p>
        <button onClick={() => window.location.reload()}>Refresh Page</button>
      </div>
    );
  }