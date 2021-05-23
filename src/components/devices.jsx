import React from 'react';

const Devices = props => {

    return (
        <section className="devices-section">
                <div className="mobile-section">
                    <img src="img/illustration-phones.svg" alt="img"/>
                    <div>
                        <h3>
                            {
                                props.dataResponse.data ?
                                    props.dataResponse.data[2].title
                                : "State of the Art Infrastructure"
                            }
                        </h3>
                        <p>
                            {
                                props.dataResponse.data ?
                                    props.dataResponse.data[2].body
                                : `With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                                This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.`    
                            }
                        </p>
                    </div>
                </div>

                <div className="laptop-section">
                    <img className="img-laptop-desktop" src="img/illustration-laptop-desktop.svg" alt="img"/>
                    <img className="img-laptop-responsive" src="img/illustration-laptop-mobile.svg" alt="img"/>
                    <div className="container">
                        <div className="mb-4">
                            <h4 className="mb-2">
                                {
                                    props.dataResponse.data ?
                                        props.dataResponse.data[3].title
                                    : "Free, open, simple"
                                }
                            </h4>
                            <p>
                                {
                                    props.dataResponse.data ?
                                        props.dataResponse.data[3].body
                                    : `Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.`    
                                }
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-2">
                                {
                                    props.dataResponse.data ?
                                        props.dataResponse.data[4].title
                                    : "Powerful tooling"
                                }
                            </h4>
                            <p>
                                {
                                    props.dataResponse.data ?
                                        props.dataResponse.data[4].body
                                    : `Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                                    capable of producing even the most complicated sites.`    
                                }
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Devices;
