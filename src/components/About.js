function About({image = "https://via.placeholder.com/215",About}){
    return(<aside>
        <img src={image} alt="blog logo"/>
        <p>{About}</p>
    </aside>)
}