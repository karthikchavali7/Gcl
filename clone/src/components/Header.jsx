import React from 'react'


function Header(props){
    const log= (
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo"/>
        
    );
    return (
        <div className="ft">
            {log}
            <h5>Keep</h5>

        </div>
    )
}
export default  Header
 


