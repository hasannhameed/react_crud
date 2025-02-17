import MenuList from "./menu-list";

const TreeView = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList menus={menus} />
    </div>
  );
};

export default TreeView;
