import React from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import styles from './Post.module.scss';
import './style.css';
import { UserInfo } from '../UserInfo';
import { AdsSkeleton } from './Skeleton';

export const Ads = ({
    _id,
    title,
    price,
    createdAt,
    imageUrl,
    user,
    viewsCount,
    commentsCount,
    tags,
    children,
    isFullPost,
    isLoading,
    isEditable,
}) => {
    if (isLoading) {
        return <AdsSkeleton />;
    }

    const onClickRemove = () => {};

    return (
        <div className="root">
            <Link to={`/ads/${price}`}>
                {!isEditable && (
                    <div className="editButtons">
                    <Link to={`/ads/${_id}/edit`}>
                        <IconButton style={{ width: 20, height: 20 }} color="primary">
                            <EditIcon style={{ width: 20, height: 20 }}/>
                        </IconButton>
                    </Link>
                        <IconButton style={{ width: 20, height: 20, marginLeft: 5 }} onClick={onClickRemove} color="secondary">
                            <DeleteIcon style={{ width: 25, height: 25 }} />
                        </IconButton>
                    </div>
                )}
                {imageUrl && (
                    <img
                    className="image"
                    src={imageUrl}
                    alt={title}
                    />
                )}
                <div className="block">
                    <div className="info">
                        <div className="price">{price} ₽</div>
                        <div className="title" title={title}>
                            {title}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
