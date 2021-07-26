import React from 'react';
// My components
import PostsList from '../PostsList/PostsList';
// Material ui
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
// redux
import { addToFavorites, removeFromFavorites } from '../../../../redux/index';
import { connect } from 'react-redux';
// firebase
import { updateUserFavs } from '../../../../firebase/usersCollection'

const AllPosts = (props) => {

    //redux props
    const {
        userId,
        data,
        favs,
        loading,
        error,
        addToFavorites,
        removeFromFavorites
    } = props;

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
                // añadir a favoritos
                addToFavorites(item.id, userId, true)
            } else {
                // remover de favoritos
                removeFromFavorites(item.id, userId, true)
            }
        }
    }

    return (
        <PostsList
            title="Todos"
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
    data: state.posts.all.data,
    favs: state.posts.favs.data,
    loading: state.posts.all.loading,
    error: state.posts.all.error,
    userId: state.user.userId,
})
const mapDispatchToProps = dispatch => ({
    addToFavorites: (id, userId, persist) => dispatch(addToFavorites(id, userId, persist)),
    removeFromFavorites: (id, userId, persist) => dispatch(removeFromFavorites(id, userId, persist)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)
