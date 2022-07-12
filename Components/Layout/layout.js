import MainHeader from "./main-header";
const Layout = (props) => {
  return (
    <fragment>
      <MainHeader />
      <main>{props.children}</main>
    </fragment>
  );
};

export default Layout;
