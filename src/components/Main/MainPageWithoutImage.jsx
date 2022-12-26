import React from 'react';
import { Button, Empty, Row, Layout, Col } from 'antd';
import Title from 'antd/es/typography/Title';

const MainPageWithoutImage = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: '50vh'
        }}>
            <Col>
                <Row>
                    <Empty description={
                        <Title level={2}>
                            Развёртка отсутствует
                        </Title>
                    } />
                </Row>
                <Row justify="center" align="middle">
                    <Button size={"large"}>
                        Добавить развётку
                    </Button>
                </Row>
            </Col>
        </div>

    )
}
export default MainPageWithoutImage;