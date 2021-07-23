import React, { useState } from 'react';
// My components
import PostsList from '../PostsList/PostsList';
// Material ui
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';

const AllPosts = () => {

    // State
    const [ data, setData ] = useState([
        { id: 1, title: "Post1" },
        { id: 2, title: "Post2" },
        { id: 3, title: "Post3" },
    ])

    const itemActiveState = {
        title: "Remover de favoritos",
        icon: StarRoundedIcon,
    };
    const itemInactiveState = {
        title: "Añadir a favoritos",
        icon: StarOutlineRoundedIcon
    };
    
    const onItemClick = (item) => {
        return (isActive) => {
            if(isActive) {
                alert( item.title +" ahora está activo");
            } else {
                alert( item.title +" ahora está inactivo");
            }
        }
    }

    return (
        <PostsList
            title="Todos"
            data={data}
            inactiveState={itemInactiveState}
            activeState={itemActiveState}
            onItemClick={onItemClick}
        />
    )
}

export default AllPosts
