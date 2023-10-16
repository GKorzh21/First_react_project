import React, {useState} from 'react';
import Items from "./Tags_items";

function HeaderTags() {
    const [isShown, setIsShown] = useState(false);

    const handleMouseEnter = () => {
        setIsShown(true);
        console.log('in')
    }

    const handleMouseLeave = () => {
        setIsShown(false);
        console.log('out')
    }

    const array_to_div = Items.map(item =>
        <div className='current_tag'>{item}</div>
    );

    return (
        <div>
            <section class="header">
                <div class="wrap_logo">
                <img class="logo" src="logo.png" alt="" />
                </div>
                <div class="wrap_header_btn">
                <div class="wrap_header_content">
                    <div>Главная</div>
                </div>

                <div id="wrap_header_tags" class="wrap_header_content wrap_header_tags">
                    <div className='title_tags'
                        onMouseOver={handleMouseLeave}
                        onMouseEnter={handleMouseEnter}>
                        Тэги
                    </div>
                </div>

                <div class="wrap_header_content">
                    <div>Контакты</div>
                </div>

                <div class="serch_wrap">
                    <input class="serch_input" type="text" placeholder="Поиск" />
                </div>
                </div>
            </section>

            <div
                onMouseEnter={handleMouseEnter}
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