import React from 'react';
import { Button, Empty, Layout } from 'antd';
import Title from 'antd/es/typography/Title';

const MainPageWithoutImage = () => {
    return (
        <div>
            <div>
                <Empty description={
                    <Title level={2}>
                        Развёртка отсутствует
                    </Title>
                } />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Button size={"large"}>
                    Добавить развётку
                </Button>
            </div>

        </div>

    )
}
export default MainPageWithoutImage;