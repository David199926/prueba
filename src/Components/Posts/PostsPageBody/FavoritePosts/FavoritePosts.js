import React from 'react'
// My components
import PostsList from '../PostsList/PostsList';
// Material ui
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { removeFromFavorites } from '../../../../redux/index';
import { connect } from 'react-redux';

const FavoritePosts = (props) => {

    // redux props
    const { data, userId, removeFromFavorites } = props;

    const itemActiveState = {
        title: "Remover de favoritos",
        icon: ClearRoundedIcon,
    };
    const itemInactiveState = {...itemActiveState};

    const onItemClick = (item) => {
        return () => {
            removeFromFavorites(item.id, userId, true);
        }
    }

    return (
        <PostsList
            title="Posts favoritos"
            data={data}
            error="" // no hay errores
            loading={false} // no es lista asincrona
            inactiveState={itemInactiveState}
            activeState={itemActiveState}
            onItemClick={onItemClick}
        />
    )
}

// redux
const mapStateToProps = state => ({
    data: state.posts.favs.data,
    userId: state.user.userId,
})
const mapDispatchToProps = dispatch => ({
    removeFromFavorites: (id, userId, persist) => dispatch(removeFromFavorites(id, userId, persist)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePosts)

