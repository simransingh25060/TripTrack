//@ts-nocheck
import NavItems from './NavItems';
import {Link} from "react-router"
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";

const MobileSidebar = () => {
let sidebar: SidebarComponent;

 const toggleSidebar = () => {
        sidebar.toggle()
    }

    return(
        <div className='mobile-sidebar wrapper pt-20'> 
        <header>
            <Link to="/">
            <img
            src="/assets/icons/logo.svg"
            alt="Logo"
            className="size-[30px]"
            />



            <h1>Tourvisto</h1>
            </Link>

            {/* //@ts-ignore */}
            <button onClick={() => sidebar.toggle() }>
             <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />

            </button>
            
            </header>

             <SidebarComponent
                width={270}
                //@ts-ignore
                ref={(Sidebar) => sidebar = Sidebar}
                created={() => sidebar.hide()}
                closeOnDocumentClick={true}
                showBackdrop={true}
                type="over"
            >
                <NavItems handleClick={toggleSidebar} />
            </SidebarComponent>
            </div>
    )
}

export default MobileSidebar