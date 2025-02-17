import MenuItem from "./menu-item";

const MenuList = ({ menus }) => {
  return (
    <div>
      {menus && menus.length > 0
        ? menus.map((menuItem) => <MenuItem key={menuItem.label} menuItem={menuItem} />)
        : null}
    </div>
  );
};

export default MenuList;
