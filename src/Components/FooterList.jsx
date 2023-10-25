import React from "react"
import Items from "./Tags_items";

const Footerlist = () => {    
    const list_items = Items.map(item =>
        <li className="footer_tag">{item}</li>
    );

    return <ul className="footer_tags">{list_items}</ul>;
}

export default Footerlist;