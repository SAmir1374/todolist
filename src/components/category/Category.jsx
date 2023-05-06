import React from "react";
import "./category.scss";
import Input from "../input/Input";

function Category() {
    return (
        <div className="cate">
            <div className="category-wrapper">
                <div className="intoform">
                    <div className="input-group">
                        <label for="title">Title : </label>
                        <input type="text" id="title" placeholder="Math" />
                    </div>
                    <div className="input-group">
                        <label for="categoryform">Categories : </label>
                        <select name="categoryform" id="categoryform">
                            <option value="math">Math</option>
                            <option value="job">Job</option>
                            <option value="home">Home</option>
                            <option value="fun">Fun</option>
                            <option value="">+</option>
                        </select>
                    </div>
                </div>
                <div className="priority">
                    <div className="input-group">
                        <label for="priorityform">Priority : </label>
                        <select name="priorityform" id="priorityform">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div className="dateform">
                    <div className="input-group">
                        <label for="startdate">start Date : </label>
                        <input type="date" id="startdate" />
                    </div>
                    <div className="input-group">
                        <label for="enddate">End Date : </label>
                        <input type="date" id="enddate" />
                    </div>
                </div>
            </div>
            <Input/>
        </div>
    );
}

export default Category;
