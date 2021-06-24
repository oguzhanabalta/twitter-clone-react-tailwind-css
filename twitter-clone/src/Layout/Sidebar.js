import React, { useState } from 'react'
import SideLink from "../components/SideLink";
import UserBox from '../components/UserBox';
import twitterLogo from "../images/twitter.svg"
import { HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, MoreIcon } from '../icons/icon'

const SideLinks =[
    {
        name:"Home",
        icon: HomeIcon,
    },
    {
        name:"Explore",
        icon: ExploreIcon,
    },
    {
        name:"Notifications",
        icon: NotificationsIcon,
    },
    {
        name:"Messages",
        icon: MessagesIcon,
    },
    {
        name:"Bookmarks",
        icon: BookmarksIcon,
    },
    {
        name:"Lists",
        icon: ListsIcon,
    },
    {
        name:"Profile",
        icon: ProfileIcon,
    },
    {
        name:"More",
        icon: MoreIcon,
    }
]
const Sidebar = () => {
    const [active, setActive] = useState("Home");
    const hadleMenuItemClick=(name) => {
        setActive(name);
    };
    return (
        <div className="h-screen sticky top-0 flex flex-col justify-between bg-white w-72 px-2">
            <div>
                <div className="mt-1 mb-2 ml-1 flex items-center justify-center w-14 h-14 hover:bg-blue-100 rounded-full">
                    <img src={twitterLogo} alt="twitterLogo" className="w-10 h-10"></img>
                </div>
                
                <nav className="mb-5">
                    <ul>
                        {SideLinks.map(({name, icon}) =>(
                            <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={hadleMenuItemClick} />
                        )) }
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full shadow-lg py-3 px-8 w-11/12 transform transition-colors duration-200">Tweet</button>
            </div>
        
            <UserBox></UserBox>
            
                       
        </div>
        
    )
}

export default Sidebar
