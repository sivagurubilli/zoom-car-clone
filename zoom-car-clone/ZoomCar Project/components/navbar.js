function navbar(){
    return `<div id="nav">
    <div id="left_nav">
      <div id="sidebar"><hr><hr><hr></div>
  <img id="logo" src="https://assets.zoomcar.com/assets/full-logo-white-eb7855c91e51c8bcf05868377936159a.svg">
  </div>
  <div id="right_nav">
      <div>Become a Host</div>
      <div>ZMS</div>
      <div id="login">Login/Signup</div>
  </div>
  </div>
  <div id="low_nav">
    <div id="sidebarNav">
      <div onclick="window.location.href='login.html'">
        <i class="fas fa-user"></i>
        <p>Login or Signup</p>
      </div>
      <div>
        <img src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-location-icon-png-image_1834331.jpg">
        <p>Change City</p>
        <h4>Banglore</h4>
      </div>
      <div onclick="window.location.href='superMilerClub.html'">
        <i class="fas fa-cube"></i>
        <p>Supermiler Club</p>
      </div>
      <div onclick="window.location.href='zoomCarPolicy.html'">
        <i class="fas fa-copy"></i>
        <p>Zoomcar Fleet Vechiles Policies</p>
      </div>
      <div onclick="window.location.href='hostPolicy.html'">
        <i class="fas fa-copy"></i>
        <p>Zoomcar Host Vechiles Policies</p>
      </div>
      <div onclick="window.location.href='helpandsupport.html'">
        <i class="fas fa-phone"></i>
        <p>Help & Support</p>
      </div>
    </div>
  </div>`;
}
export default navbar;