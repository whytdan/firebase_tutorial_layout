import Routes from "./routes";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AuthProvider from "./contexts/authContext";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

toast.configure();

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
