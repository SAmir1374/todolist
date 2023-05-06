import React, { useState } from "react";
import "./mainpage.scss";
import Input from "../input/Input";
import ListItem from "../listitem/ListItem";
import Category from "../category/Category";

export const shared = React.createContext();

function MainPage() {
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");

    const addtodo = () => {
        if(task === ''){
            return
        }
        setList((list) => [...list, { title: task, id: getid() }]);
        setTask("");
    };

    const removelist = (id) => {
        const newList = list.filter((list) => list.id !== id);
        setList(newList);
    };

    const editList = (id) => {};

    const getid = () => {
        return list.length ? list[list.length - 1].id + 1 : 1;
    };

    return (
        <div className={`container`}>
            <shared.Provider value={{ addtodo, removelist, editList, list, setList, task, setTask }}>
                <Input />
                <hr />
                {list.map(({ title, id }) => (
                    <ListItem title={title} id={id} />
                ))}
            </shared.Provider>
        </div>
    );
}

export default MainPage;
