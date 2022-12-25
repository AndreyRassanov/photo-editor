import React from 'react';
import { Image } from 'antd';
import Title from 'antd/es/typography/Title';
import image from './../../images/image.png'

const MainPageWithImage = () => {
    return (
        <div>
            <div>
                <Title level={2} style={{ textAlign: "center" }}>
                    Развёртка
                </Title>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image src={image} width={500}/>
            </div>

        </div>

    )
}
export default MainPageWithImage;