import React from "react"

function Badge(props) {
    const faIcon = "fas fa-1x " + props.faIcon
    return(
        <div style={{marginLeft: 3, marginRight: 3, marginBottom: 6}}>
            <div className="tags has-addons">
                <span className="tag is-dark">{props.text}</span>
                <span className="tag is-success">
                    <i className={faIcon}></i>
                </span>
            </div>
        </div>
    )
}

export default Badge