import React from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import styles from './Post.module.scss';
import { UserInfo } from '../UserInfo';
import { AdsSkeleton } from './Skeleton';

export const Ads = ({
    _id,
    title,
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
        <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
            {isEditable && (
                <div className={styles.editButtons}>
                <Link to={`/ads/${_id}/edit`}>
                    <IconButton color="primary">
                    <EditIcon />
                    </IconButton>
                </Link>
                <IconButton onClick={onClickRemove} color="secondary">
                    <DeleteIcon />
                </IconButton>
                </div>
            )}
            {imageUrl && (
                <img
                className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
                src={imageUrl}
                alt={title}
                />
            )}
            <div className={styles.wrapper}>
                <UserInfo {...user} additionalText={createdAt} />
                <div className={styles.indention}>
                <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
                    {isFullPost ? title : <a href={`/ads/${_id}`}>{title}</a>}
                </h2>
                {/* {children && <div className={styles.content}>{children}</div>} */}
                </div>
            </div>
        </div>
    );
};
