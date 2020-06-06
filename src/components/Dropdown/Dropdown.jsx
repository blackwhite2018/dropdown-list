import React, { useState } from 'react';
import Item from './Item/Item';

const Dropdown = () => {
    const [opened, setOpened] = useState(true);
    const [items, setItems] = useState([
        {
            text: 'Profile Information',
            href: '#'
        },
        {
            text: 'Change Password',
            href: '#'
        },
        {
            text: 'Become PRO',
            href: '#'
        },
        {
            text: 'Help',
            href: '#'
        },
        {
            text: 'Log Out',
            href: '#'
        },
        {
            text: 'Profile Information',
            href: '#'
        }
    ]);
    const [actived, setActived] = useState('Profile Information');

    const toggleOpen = () => {
        setOpened(!opened);
    };

    return (
        <>
            <div data-id="wrapper" className={ `dropdown-wrapper ${opened ? '' : 'open'}` }>
            <button data-id="toggle" className="btn" onClick={ toggleOpen }>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            <ul data-id="dropdown" className="dropdown">
                {
                    items.map((item, index) => (
                            <Item
                                item={ item }
                                actived={ actived === item.text ? true : false }
                                key={ index }
                            />
                        )
                    )
                }
            </ul>
            </div>
        </>
    );
};

export default Dropdown;

