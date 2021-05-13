import React from 'react';
//code from facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

export default class SocialIFrame extends React.Component{
    render(){
        return(
            <div className='container'>
                <h3 className='iframe_title'>Facebook Page</h3>
                <div className='iframe'>
                    <div className="fb-page"
                         data-tabs="timeline,events,messages"
                         data-href="https://www.facebook.com/CodersLabSzkolaIT/"
                         data-width="200"
                         data-hide-cover="false">
                    </div>
                </div>
            </div>
        )
    }
}
