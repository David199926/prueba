import React from 'react'
// My components
import PostsList from '../PostsList/PostsList';
// Material ui
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { removeFromFavorites } from '../../../../redux/index';
import { connect } from 'react-redux';

const FavoritePosts = (props) => {

    // redux props
    const { loading, error, data, userId, removeFromFavorites } = props;

    const itemActiveState = {
        title: "Remover de favoritos",
        icon: ClearRoundedIcon,
    };
    const itemInactiveState = {...itemActiveState};

    const onItemClick = (item) => {
        return () => {
            removeFromFavorites(item.id, userId);
        }
    }

    return (
        <PostsList
            title="Posts favoritos"
            data={data}
            loading={loading}
            error={error}
            inactiveState={itemInactiveState}
            activeState={itemActiveState}
            onItemClick={onItemClick}
        />
    )
}

// redux
const mapStateToProps = state => ({
    loading: state.posts.favs.loading,
    error: state.posts.favs.error,
    data: state.posts.favs.data,
    userId: state.user.userId,
})
const mapDispatchToProps = dispatch => ({
    removeFromFavorites: (id, userId) => dispatch(removeFromFavorites(id, userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePosts)

