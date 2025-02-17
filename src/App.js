import "./App.css";
// import Accordian from "./components/reactprojects/accordian";
// import RandomColor from "./components/reactprojects/randomColor";
// import Starrating from "./components/reactprojects/star-rating";
// import Form from "./components/reactprojects/form";
// import Crud from "./components/reactprojects/crud";
// import SimpleCrud from "./components/reactprojects/simplecrud";
// import ImageSlider from "./components/reactprojects/imageSlider";
// import LoadMore from "./components/reactprojects/LoadMore";
import menus from "./components/reactprojects/tree-view/data";
import TreeView from "./components/reactprojects/tree-view/tree-view";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* {<Starrating />} */}
      {/* <Form /> */}
      {/* <Crud /> */}
      {/* <SimpleCrud /> */}
      {/* <ImageSlider
        //url2={"https://jsonplaceholder.typicode.com/users"}
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
      /> */}
      {/* <LoadMore /> */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
