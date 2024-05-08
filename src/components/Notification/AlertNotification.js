import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Button, Skeleton } from 'antd';

const App = () => {
    const [data, setData] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);

    // Sample data structure
    const initialData = [
        {
            id: 1,
            name: "Mangesh Kumar",
            number: "8787878787",
            location: "Locality, Surat Gujarat"
        },
        {
            id: 2,
            name: "John Doe",
            number: "7878787878",
            location: "Locality, Surat Gujarat"
        },
        {
            id: 3,
            name: "Rajkumar",
            number: "8787878787",
            location: "Locality, Surat Gujarat"
        },
        {
            id: 4,
            name: "Vikas singh",
            number: "8989898989",
            location: "Locality, Surat Gujarat"
        }
    ];

    useEffect(() => {
        setData(initialData);
    }, []);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
    };
    return (
        <div id="scrollableDiv" className='scrollableDiv'>
            <List
                size="small"
                style={{ background: "#ffff" }}
                header={
                    <>
                        <div>
                            <h6 className="cust_header mb-3" style={{ fontWeight: 500, color: "#0d6efd" }}>
                                <span>Notifications</span>
                            </h6>
                        </div>
                        <div className="row w-100">
                            <div className='col-md-3'>
                                <strong className="fw-bolder">Name</strong>
                            </div>
                            <div className='col-md-3'>
                                <strong className="fw-bolder">Number</strong>
                            </div>
                            <div className='col-md-3'>
                                <strong className="fw-bolder">Location</strong>
                            </div>
                            <div className='col-md-3'>
                                <strong className="fw-bolder">Action</strong>
                            </div>
                        </div>
                    </>

                }
                dataSource={data}
                renderItem={(item) => (
                    <List.Item
                        style={{
                            // padding: "10px 0",
                            backgroundColor: selectedItemId === item.id ? '#f0f0f0' : '#fff'
                        }}
                        onClick={() => handleItemClick(item.id)}
                    >
                        <div className="row w-100">
                            <div className='col-md-3'>
                                <span>{item.name}</span>
                            </div>
                            <div className='col-md-3'>
                                <span>{item.number}</span>
                            </div>
                            <div className='col-md-3'>
                                <span>{item.location}</span>
                            </div>
                            <div className='col-md-3'>
                                <div className='d-flex'>
                                    <Button type="link" style={{ color: "#33cc33" }}>Accept</Button>
                                    <Button type="link" style={{ color: "#ff0000" }}>Decline</Button>
                                </div>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default App;
