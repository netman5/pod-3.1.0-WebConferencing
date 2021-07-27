import React from 'react';

function Header(props) {
    return (
        <div>
       
    <header id="header" class="header">
        <img class="decoration-star" src="images/decoration-star.svg" alt="alternative"/>
        <img class="decoration-star-2" src="images/decoration-star.svg" alt="alternative"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-xl-5">
                    <div class="text-container">
                        <h1 class="h1-large">Easy Web Conferencing</h1>
                        <p class="p-large">Is education residence conveying and sore. Suppose shyness say ten behaved morning had. Any propose assist compliment occasional too reasonably</p>
                        <a class="btn-solid-lg" href="#introduction">Join Interview</a>
                        <a class="btn-outline-lg" href="#contact">Contact us</a>
                    </div> 
                </div>
                <div class="col-lg-5 col-xl-7">
                    <div class="image-container">
                        <img class="img-fluid" src="images/header.png" alt="alternative"/>
                    </div>
                </div>
            </div> 
        </div>
    </header> 
        </div>
    );
}

export default Header;