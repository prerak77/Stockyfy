const Main = () => {
    return ( 
        <header>
            <div className="container">
                <div className="image">
                    <img src={require('../assets/images/img_1.png')} alt="" />
                </div>

                <div className="buttons">
                    <button>Try Trade</button>
                    <button id ="scrollButton"
                        onClick={function(){window.scrollTo({top : 850,behavior : 'smooth',})}}>Prices</button>
                </div>
            </div>
        </header>
        
     );
}
 
export default Main;