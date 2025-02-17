import MenuList from "./menu-list";


const MenuItem = ({ menuItem }) => {
  return (
    <div>
      <p>{menuItem.label}</p>
      {menuItem.children && menuItem.children.length > 0 ? (
        <div style={{ paddingLeft: "20px" }}>
          <MenuList menus={menuItem.children} />
        </div>
      ) : null}
    </div>
  );
};

export default MenuItem;// eslint-disable-next-line
