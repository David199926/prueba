import React, { useState } from 'react'
// My components
import PostsList from '../PostsList/PostsList';
// Material ui
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

const FavoritePosts = () => {

    // State
    const [ data, setData ] = useState([
        { id: 4, title: "Post4" },
        { id: 5, title: "Post5" },
        { id: 6, title: "Post6" },
    ])

    const itemActiveState = {
        title: "Remover de favoritos",
        icon: ClearRoundedIcon,
    };
    const itemInactiveState = {...itemActiveState};

    const onItemClick = (item) => {
        return (isActive) => {
            // Remover el item de la lista de favoritos
            setData(data.filter(post => post.id !== item.id));
        }
    }

    return (
        <PostsList
            title="Posts favoritos"
            data={data}
            inactiveState={itemInactiveState}
            activeState={itemActiveState}
            onItemClick={onItemClick}
        />
    )
}

export default FavoritePosts
