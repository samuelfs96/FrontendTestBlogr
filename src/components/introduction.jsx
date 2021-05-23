import React from 'react';

const Introduction = props => {

    return (
        <section className="designed-future">
            <div className="main-content">
                <h3>Designed for the future</h3>
                <div className="aliner">
                    <img className="img-desktop" src="img/illustration-editor-desktop.svg" alt="img"/>
                    <img className="img-responsive" src="img/illustration-editor-mobile.svg" alt="img"/>
                    <div className="container">
                    <div className="mb-4">
                        <h4 className="mb-2">
                            {
                                props.dataResponse.data ?
                                    props.dataResponse.data[0].title
                                : "Introducing an extensible editor"
                            }
                        </h4>
                        <p>
                            {
                                props.dataResponse.data ?
                                    props.dataResponse.data[0].body
                                : `Blogr features an exceedingly intuitive interface which lets you focus
                                on one thing: creating content. The editor supports management of
                                multiple blogs and allows easy manipulation of embeds such as
                                images, videos, and Markdown. Extensibility with plugins and themes
                                provide easy ways to add functionality or change the looks of a blog.`    
                            }
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-2">
                            {
                                props.dataResponse.data ?
                                    props.dataResponse.data[1].title   
                                : "Robust content management"
                            }
                        </h4>
                        <p>
                            {
                                props.dataResponse.data ?
                                    props.dataResponse.data[1].body
                                : `Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.`    
                            }
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;
