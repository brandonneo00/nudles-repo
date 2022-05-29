import nuslogo from "../../images/nus-logo.png";

function TopBar() {
  return (
    <div className="top-bar">
      <img src={nuslogo} className="nus-logo" alt="logo" />
    </div>
  );
}
export default TopBar;
