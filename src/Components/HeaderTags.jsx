import React, {useState} from 'react';
import Items from "./Tags_items";

function HeaderTags() {
    const [isShown, setIsShown] = useState(false);

    const handleMouseOver = () => {
        setIsShown(true);
        console.log('in')
    }

    const handleMouseLeave = () => {
        setIsShown(false);
        console.log('out')
    }

    const array_to_div = Items.map(item =>
        <div key={item} className='current_tag'>{item}</div>
    );

    return (
        <div>
            <section className="header">
                <div className="wrap_logo">
                <img className="logo" src="logo.png" alt="" />
                </div>
                <div className="wrap_header_btn">
                <div className="wrap_header_content">
                    <div>Главная</div>
                </div>

                <div id="wrap_header_tags" className="wrap_header_content wrap_header_tags">
                    <div className='title_tags'
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}>
                        Тэги
                    </div>
                </div>

                <div className="wrap_header_content">
                    <div>Контакты</div>
                </div>

                <div className="serch_wrap">
                    <input className="serch_input" type="text" placeholder="Поиск" />
                </div>
                </div>
            </section>

            <div
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                {isShown && (
                    <div className='wrap_all_tags'>{array_to_div}</div>
                )}
            </div>
        </div>
    );
}

export default HeaderTags;