import React from 'react';
// My components
import PostsList from '../PostsList/PostsList';
// Material ui
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
// redux
import { addToFavorites, removeFromFavorites } from '../../../../redux/index';
import { connect } from 'react-redux';

const AllPosts = (props) => {

    //redux props
    const { data, loading, error, addToFavorites, removeFromFavorites } = props;

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
                addToFavorites(item.id);
            } else {
                removeFromFavorites(item.id);
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
    data: state.posts.all,
    loading: state.posts.loading,
    error: state.posts.error,
})
const mapDispatchToProps = dispatch => ({
    addToFavorites: (id) => dispatch(addToFavorites(id)),
    removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)
