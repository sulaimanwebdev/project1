import React, {useState} from 'react'

const Header = () => {

    const [open, setopen] = useState()
    

  function openit(){
    setopen('nav-opened');

  }

  function closeit(){
    setopen('');

  }
    return (
        <>
             <div className="header">
                <nav className={open}>
                    <ul>
                        <a href="#">Home</a>
                        <a href="#">Video</a>
                        <a href="#">Synoposis</a>
                        <a href="#">Universe</a>
                        <a href="#">#TheMatrixMovie</a>
                    </ul>
                    <div className="social">
                       <a href="#"><i class="fab fa-facebook"></i></a>
                       <a href="#"><i class="fab fa-twitter"></i></a>
                       <a href="#"><i class="fab fa-instagram"></i></a>

                       

                    </div>
                    <div className="close" onClick={closeit}>
                <i class="far fa-times"></i>
                </div>
                </nav>
                <div className="burger" onClick={openit}>
                <i class="far fa-bars"></i>
                </div>

              

                
            </div>
        </>
    )
}

export default Header
