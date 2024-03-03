import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import axios from '../axios'

import { Ads } from '../components/Ads';
import { TagsBlock } from '../components/TagsBlock';

export const Home = () => {
    React.useEffect(() => {
        axios.get('/ads')
    }, [])

    return (
        <>
            <Tabs style={{ marginBottom: 15, marginTop: 10 }} value={0} aria-label="basic tabs example">
                <Tab label="Новые" />
                <Tab label="Продажа" />
                <Tab label="Покупка" />
                <Tab label="Услуги" />
            </Tabs>
            <Grid container xs={10} spacing={1}>
                {[...Array(5)].map(() => (
                    <Grid xs={3} item>
                    <Ads
                        id={1}
                        title="Стул"
                        imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
                        user={{
                            avatarUrl:
                            'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
                            fullName: 'Keff',
                        }}
                        createdAt={'12 июня 2022 г.'}
                        viewsCount={150}
                        commentsCount={3}
                        tags={['react', 'fun', 'typescript']}
                        isEditable
                    />
                    </Grid>
                ))}
                <Grid xs={3} item>
                    <TagsBlock items={['react', 'typescript', 'заметки']} isLoading={false} />
                </Grid>
            </Grid>
        </>
    );
};
