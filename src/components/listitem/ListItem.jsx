import React, { useContext } from "react";
import { shared } from "../mainpage/MainPage";
import { RiForbid2Fill } from 'react-icons/ri'
import "./listitem.scss";

function ListItem({ title, id, priority, done }) {
    const share = useContext(shared);
    var ok = false

    const chageok = (e) => ok = e;

    const active = (value) => {
        return value === true ? "done" : "";
    };

    return (
        <div className={`listitem-wrapper ${active(ok)}`}>
            <div className={``}>
                <h3 key={id}>{title}</h3>
            </div>
            <div className="clicker">
                <input type="checkbox" onClick={(e) => chageok(e.target.checked)} />
                <RiForbid2Fill className="icons" onClick={() => share.removelist(id)}/>
            </div>
        </div>
    );
}

export default ListItem;
