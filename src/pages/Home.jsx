import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";

import axios from "../axios";

import { Ads } from "../components/Ads";
import { TagsBlock } from "../components/TagsBlock";

export const Home = () => {
    React.useEffect(() => {
        axios.get("/ads");
    }, []);

    const tabs = [
        { label: "Новые" },
        { label: "Продажа" },
        { label: "Покупка" },
        { label: "Услуги" },
        { label: "Мои объявления" },
    ];

    const adsData = [...Array(20)].map(() => ({
        id: 1,
        title: "Стул и стол",
        price: "1000",
        imageUrl:
            "https://klp.ru/images/cache/no_image-640x480.jpg",
        createdAt: "12 июня 2022 г.",
        viewsCount: 150,
        commentsCount: 3,
        tags: ["react", "fun", "typescript"],
        isEditable: true,
    }));

    return (
        <>
            <Tabs
                sx={{ my: 1, ml: 0.25 }}
                value={0}
                aria-label="basic tabs example"
            >
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label} />
                ))}
            </Tabs>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                    style={{
                        flex: "0 0 74%",
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "10px",
                        mr: 2,
                    }}
                >
                    {adsData.map((ad, index) => (
                        <div key={index}>
                            <Ads {...ad} />
                        </div>
                    ))}
                </div>
                <div style={{ flex: "0 0 25%", marginLeft: 12 }}>
                    <TagsBlock
                        items={["react", "typescript", "заметки"]}
                        isLoading={false}
                    />
                </div>
            </div>
        </>
    );
};
