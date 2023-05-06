import React, { useContext } from "react";
import { shared } from "../mainpage/MainPage";
import { RiSendPlaneFill } from "react-icons/ri";
import "./input.scss";

function Input() {
    const share = useContext(shared)

    return (
        <div className="input-wrapper">
            <input type="text" value={share.task} onChange={e => share.setTask(e.target.value)} placeholder="e.g watch movie" />
            <div className="my-icon" onClick={share.addtodo}>
                <RiSendPlaneFill />
            </div>
        </div>
    );
}

export default Input;
