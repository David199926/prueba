import React from 'react'
// My components
import PostsList from '../PostsList/PostsList';
// Material ui
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import { removeFromFavorites } from '../../../../redux/index';
import { connect } from 'react-redux';

const FavoritePosts = (props) => {

    // redux props
    const { data, removeFromFavorites } = props;

    const itemActiveState = {
        title: "Remover de favoritos",
        icon: ClearRoundedIcon,
    };
    const itemInactiveState = {...itemActiveState};

    const onItemClick = (item) => {
        return () => {
            removeFromFavorites(item.id);
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
    data: state.posts.favs
})
const mapDispatchToProps = dispatch => ({
    removeFromFavorites: (id) => dispatch(removeFromFavorites(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePosts)

