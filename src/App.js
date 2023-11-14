
import './styles/Fonts.css';
import HomePage from "./components/home/HomePage";
import Layout1 from "./components/layout/Layout1";
import {Route,Routes} from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
import ScrollToTop from "./components/shared/ScrollToTop";




function App() {

  return (
      <>

         <Layout1>
             <ScrollToTop/>
             <Routes>
                 <Route path="/" element={<HomePage/>}/>
                 <Route path="/blogs/:slug" element={<BlogPage/>}/>
                 <Route path="/authors/:slug" element={<AuthorPage/>}/>

             </Routes>

         </Layout1>






      </>



  );
}

export default App;
