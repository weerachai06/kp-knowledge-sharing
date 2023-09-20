import "./App.css";
import Demo from "./01-css-variables/CssVariables";
// import Demo from "./02-viewport-divider/ViewportDivider";
// import Demo from "./03-flexbox-holy-albatross/FlexboxHolyAlbatross";
// import Demo from "./04-container-queries/ContainerQuery";
// import Demo from './05-sidebar-with-css-variables/Sidebar'

// import Demo from "./components/ViewportDivider/ViewportDivider";
// import Demo from "./components/Sidebar/Sidebar";
// import Demo from "./components/FlexboxHolyAlbatross/FlexboxHolyAlbatross";
// import Demo from "./components/FlexboxHolyAlbatross1/FlexboxHolyAlbatross";
// import Demo from "./components/ContainerQuery/ContainerQuery";

function App() {
  return (
    <div
      style={{
        maxWidth: 800,
        marginInline: "auto",
        width: "100%",
      }}
    >
      {/* <ViewportDivider /> */}
      {/* <Sidebar>
        <h2>Ad minim in nulla veniam nulla velit tempor et quis anim.</h2>
      </Sidebar> */}
      <Demo />
    </div>
  );
}

export default App;
