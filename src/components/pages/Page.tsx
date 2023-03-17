import React from 'react';
import {PagesType} from "../data/dataState";
import {useParams} from "react-router-dom";

type PagePropsType = {
    pages:Array<PagesType>
}

export const Page = (props:PagePropsType) => {
    const params = useParams()
    return (
        <div>
        <div>{props.pages[Number(params.id)].about}</div>
        <div>{props.pages[Number(params.id)].heading}</div>
        </div>
    );
};

