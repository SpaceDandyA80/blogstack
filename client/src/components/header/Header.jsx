import "./style.css"

export default function Header() {
    return (
        <div className="header">
             <div className="headerTitles">

             <span className="headerTitlesSm">React & Node</span>
             <span className="headerTitlesLg">Blog</span>
             </div>
             <img src="https://images.unsplash.com/photo-1629058622223-93665bf5d046" alt="flower" className="headerImg" />
        </div>
    )
}
