import React from 'react';
// Styles
import './PostsList.scss';
// Material ui
import { IconButton } from '@material-ui/core';

const PostsList = (props) => {
    // datos de la lista
    const {
        title,
        data,
        loading,
        error,
        onItemClick,
        activeState,
        inactiveState
    } = props;

    return (
        <div>
            <span className="posts-title">{title}</span>
            <ul className="posts-list">
                {
                    error !== ""
                    ? "Error: " + error
                    : loading
                    ? "Cargando datos..." :
                    data.length === 0
                    ? "No hay datos"
                    : data.map(item => (
                        <ListItem
                            key={`item-${item.id}`}
                            title={item.title}
                            id={item.id}
                            active={item.isFav}
                            activeState={activeState}
                            inactiveState={inactiveState}
                            onItemClick={onItemClick(item)}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

const ListItem = (props) => {
    // props
    const { title, id, onItemClick, active } = props;

    const activeLabel = props.activeState.title;
    const ActiveIcon = props.activeState.icon;

    const inactiveLabel = props.inactiveState.title;
    const InactiveIcon = props.inactiveState.icon;

    // state toggler
    const toggleState = () => {
        onItemClick(!active);
    }

    return (
        <li className="list-item">
            <div className="list-info">
                <span className="item-title">{title}</span>
                <span className="item-id">Id: {id}</span>
            </div>
            <div className="list-action">
                <IconButton
                    color="primary"
                    onClick={toggleState}
                    title={active ? activeLabel : inactiveLabel}
                    className="item-icon"
                >
                    {
                        active ? <ActiveIcon /> : <InactiveIcon />
                    }
                </IconButton>
            </div>
        </li>
    )
}

export default PostsList
