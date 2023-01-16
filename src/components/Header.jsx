import "./Header.css"
import SearchBar from "./SearchBar"
import Title from "./Title"

function Header(){
    return (
        <div className="Header-header">  
             <Title></Title>
            <SearchBar></SearchBar>
        </div>
    )
}

export default Header