import { Suspense,} from "react";
import Banner from "./component/Banner"
import Nav from "./component/Nav"
import Stacks from "./component/stacks/Stacks";
import type { Istack } from "./types/stack";
import { ToastContainer } from "react-toastify";
import DownSection from "./component/DownSection";
import Footer from "./component/Footer";

// import YourStacks from "./component/stacks/YourStacks";

const stacksFetch = async (): Promise<Istack[]> => {
  const res = await fetch('/public/data.json');
  const data = await res.json();
  return data;
};

function App() {
  // const [selectedStacks, setSelectedStacks] = useState<Istack[]>([]);
  const stacksPromise = stacksFetch();

  return (
    <><ToastContainer position="top-right" autoClose={2000} /><>
      <Nav></Nav>
      <Banner />
      <ToastContainer />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Stacks StacksPromise={stacksPromise} />
      </Suspense>
     <DownSection/>
     <Footer/>
      {/* <YourStacks selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} /> */}
    </></>
  );
}

export default App
