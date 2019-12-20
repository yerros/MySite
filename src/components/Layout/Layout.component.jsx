import React  from 'react';
import SideBar from '../Sidebar/SideBar.component';
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';

const Layout = (props) => (
    <div>
        <SideBar />
        <div id="right-panel" className="right-panel">
        <Header />
        <div className="content">
        <div className="animated fadeIn">
        {props.children}
        </div>
        </div>
        <Footer />
      </div>
    </div>
)

export default Layout;