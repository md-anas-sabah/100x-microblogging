import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <header className="flex justify-center gap-128 py-3 px-4 border-b border-neutral-700">
      <div className="flex gap-2px justify-center">
        <img
          src={logo}
          alt="logo"
          className="h-mobile-view-logo w-mobile-view-logo"
        />
      </div>
    </header>
  );
};

export default Logo;
