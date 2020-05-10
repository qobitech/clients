import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Articles,Background,Contact,LandingPage,Work} from './component/pages/mainpages';
import {Header,Footer,Menu} from './component/pages/navigation'
import pageurl from './component/framework/pageurl';

function App() {
  return (

   <Router basename={process.env.PUBLIC_URL}>
      
      <div className="app">
      
        <Header />

          <Menu />

            <div className="main_container">

                <Switch>

                    <Route exact path={pageurl.LANDING_PAGE_URL} component={LandingPage} />

                    <Route exact path={pageurl.BACKGROUND_PAGE_URL} component={Background} />
                    
                    <Route exact path={pageurl.ARTICLE_PAGE_URL} component={Articles} />
                    
                    <Route exact path={pageurl.WORK_PAGE_URL} component={Work} />
                    
                    <Route exact path={pageurl.CONTACT_ME_URL} component={Contact} />

                </Switch>

                <Footer />
            </div>

        

      </div>

   </Router>

  );
}

export default App;
