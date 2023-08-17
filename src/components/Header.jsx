import HeaderStyle from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={HeaderStyle.header}>
        <h1>DeepKart</h1>
        <div>
          <h3 className={HeaderStyle.cart}>Cart</h3>
        </div>
      </header>
    </>
  );
};
