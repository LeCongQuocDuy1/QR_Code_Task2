import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Tên",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Thời gian bắt đầu",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Thời gian kết thúc",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Trạng thái",
        key: "tags",
        dataIndex: "tags",
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? "geekblue" : "green";
                    if (tag === "loser") {
                        color = "volcano";
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: "Chức năng",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a>Update</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: "1",
        id: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        id: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        id: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];

const MyTable = () => {
    return <Table columns={columns} dataSource={data} />;
};

export default MyTable;
