import "../../styles/layout/headers.css";

export default function Topsection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Convertible Cribs</h2>
          <p className="hero-subtitle">Otto 3-in-1 Full-Size</p>
        </div>

        <Banner className="hero-banner" />
        <Logo className="hero-logo" />
        <ShopNow className="hero-button" />
      </div>
    </>
  );
}

export function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-discount">
          <h3 className="banner-percentage">10%</h3>
          <p className="banner-sale-text">
            sale <br />
            off
          </p>
        </div>

        <div className="banner-promo">
          <p className="banner-promo-label">Enter promotion code</p>
          <h3 className="banner-promo-code">SWAT10OFF</h3>
        </div>
      </div>
    </>
  );
}
export function Logo() {
  return (
    <>
      <img className="logo"
        src="../../public/top_nav1.png.png"
        alt="banner logo"
      />
    </>
  );
}

export function ShopNow() {
  return (
    <>
      <div className="shop-button">
          <a href="#">Shop Now</a>
      </div>
    </>
  );
}
