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
                           <a href="">
                               <img src="/assets/nav-home.svg"></img>
                           </a>
                       </HeaderNavList>
                   </HeaderNavListWrap>
               </HeaderNav>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header