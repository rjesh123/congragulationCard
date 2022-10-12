const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-container">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      ><h1>Kiran</h1>
      <p>
        Vishnu Institute of Computer Education and Technology
        <br />
        Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
