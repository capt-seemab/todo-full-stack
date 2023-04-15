import './Navbar.css'
function Navbar(props) {
  return (
  <div className='navbar'>
    <div className='username'>@username</div>
    <div className='userLog'>
        <div className='logo'>{props.name}</div> 
        <div className='signOut'>SignOut</div>
    </div>
  </div>
  );
}

export default Navbar;
