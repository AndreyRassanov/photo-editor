import React, { useState, useCallback } from 'react';
import image from './../../images/image.png'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import Draggable from 'react-draggable';
import { Button, Row, Radio } from 'antd';
const PhotoEditorPage = () => {
    const [crop, setCrop] = useState()
    return (
        <div>
            <div style={{ backgroundColor: 'LightSlateGrey', width: 'auto', height: '800px' }}>
                <Radio.Group size="small">
                    <Radio.Button value="a1">Переместить</Radio.Button>
                    <Radio.Button value="b1">Обрезать</Radio.Button>
                    <Radio.Button value="c1">Сохранить</Radio.Button>
                    <Radio.Button value="d1">Преобразовать в развёртку</Radio.Button>
                </Radio.Group>
                <Row style={{ padding: '20px' }}>
                    <Draggable>
                        <div>
                            <img width={50} height={700} src={image} />
                        </div>
                    </Draggable>
                    <Draggable>
                        <div>
                            <img width={50} height={700} src={image} />
                        </div>
                    </Draggable>
                    <Draggable>
                        <div>
                            <img width={50} height={700} src={image} />
                        </div>
                    </Draggable>
                    <Draggable>
                        <div>
                            <img width={50} height={700} src={image} />
                        </div>
                    </Draggable>
                    <Draggable>
                        <div>
                            <img width={50} height={700} src={image} />
                        </div>
                    </Draggable>
                    <Draggable>
                        <div>
                            <img width={50} height={700} src={image} />
                        </div>
                    </Draggable>
                    <Draggable>
                        <div>
                            <img width={50} height={700} src={image} />
                        </div>
                    </Draggable>
                    <div>
                        <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                            <img width={50} height={700} src={image} />
                        </ReactCrop>
                    </div>
                </Row>
            </div>
        </div>


    )
}

export default PhotoEditorPage;