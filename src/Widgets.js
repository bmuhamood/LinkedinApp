import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/Info';

function Widgets() {

    const newsArticle  = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
            </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Bbosa Muhamood is Back", "Top news  - 999 readers")}
            {newsArticle("Corona Virus", "Top news  - 886 readers")}
            {newsArticle("Tesla hits new highs", "cars & auto  - 300 readers")}
            {newsArticle("Bitcoin Breaks", "Top news  - 999 readers")}
            {newsArticle("Is Redux too good? is Back", "Top news  - 999 readers")}
            {newsArticle("Muhamood React", "Top news  - 999 readers")}
        </div>

    )
}

export default Widgets;
