// import logo from './logo.svg';
import "./App.css";
// import Navbar from "./components/Navbar";
import ListingPageContainer from "./components/ListPage";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            List Data
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
          <ListingPageContainer />
        </div>
      </main>
    </>
  );
}

export default App;
