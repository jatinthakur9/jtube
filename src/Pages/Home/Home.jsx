import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Home.css";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </>
  );
};

export default Home;
