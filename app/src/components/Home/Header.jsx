import React from "react"
import {HeaderContainer, HeaderContent, HeaderLogo, HeaderSearch, HeaderSearchIcon, HeaderNav, HeaderNavListWrap, HeaderNavList} from "./HomeStyledComponents"

const Header = props => {
    return  (
        <HeaderContainer>
            <HeaderContent>
                <HeaderLogo>
                    <a href="/home">
                        <img src="/assets/home-logo.svg"></img>
                    </a>
                </HeaderLogo>
                <HeaderSearch>
                    <HeaderSearchIcon>
                        <img src="/assets/search-icon.svg"></img>
                    </HeaderSearchIcon>         
                    {/* Search Box (not functional) */}
                    <div>
                        <input type="text" placeholder="Search"/>
                    </div>
                   
                </HeaderSearch>
               <HeaderNav>
                   <HeaderNavListWrap>
                       <HeaderNavList>
                           <a href="/home">
                               <img src="/assets/nav-home.svg"></img>
                           </a>
                           <span>Home</span>
                       </HeaderNavList>
                       <HeaderNavList>
                           <a href="/jobs">
                               <img src="/assets/nav-jobs.svg"></img>
                           </a>
                           <span>Jobs</span>
                       </HeaderNavList>
                       <HeaderNavList>
                           <a href="/network">
                               <img src="/assets/nav-network.svg"></img>
                           </a>
                           <span>My Network</span>
                       </HeaderNavList>
                       <HeaderNavList>
                           <a href="/messaging">
                               <img src="/assets/nav-messaging.svg"></img>
                           </a>
                           <span>Messaging</span>
                       </HeaderNavList>
                       <HeaderNavList>
                           <a href="/notifications">
                               <img src="/assets/nav-notifications.svg"></img>
                           </a>
                           <span>Notifications</span>
                       </HeaderNavList>
                       
                   </HeaderNavListWrap>
               </HeaderNav>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header