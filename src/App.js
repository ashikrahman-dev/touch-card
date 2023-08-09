import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import SideBar from "./components/SideBar/SideBar";
import Campaign from "./pages/Campaign/Campaign";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import VerifyAccount from './pages/VerifyAccount/VerifyAccount';
import CampaignDesignpage from "./pages/CampaignDesign/CampaignDesignpage";

function App() {
  return (
      <BrowserRouter basename="/touchcard">
          <SideBar>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="/campaigns" element={<Campaign />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/signup" element={<SignUp />}></Route>
                  <Route path="/verify" element={<VerifyAccount />}></Route>
                  <Route path="/designpage" element={<CampaignDesignpage />}></Route>
              </Routes>
          </SideBar>
      </BrowserRouter>
  );
}

export default App;
