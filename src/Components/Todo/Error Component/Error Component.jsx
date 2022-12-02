function ErrorComponent() {
  return (
    <div className="container-error">
      <div className="row mt-5 justify-content-center align-items-center">
        <div className="col"></div>
        <div className="col col-md-4">
          <h3 style={{ color: "red" }}>Error 404</h3>
          <h3 style={{ color: "red" }}>Page Not Found</h3>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default ErrorComponent;
