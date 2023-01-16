import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, activeTab }) => {
    return <div className="layout">
        <Header activeTab={activeTab} />
        <main>{children}</main>
        <Footer />
    </div>
}

export default Layout;