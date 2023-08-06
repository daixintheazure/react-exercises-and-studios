import React from 'react';
import styles from './Description.module.css';


function RecipeAuthor(){
    let autherLink = "https://belleofthekitchen.com/about-me/";
    let autherPhoto = "https://belleofthekitchen.com/wp-content/uploads/2020/07/headshot2018-e1594836057745-300x300.jpg";
    let autherName = "Ashlyn";

    return(
        <div className={styles.recipeAuthorBlock}>
            <img src={autherPhoto} alt="Ashlyn the chef" className={styles.ImageUpdates}/>
        </div>
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Belle of the Kitchen</a>
        </div>
        
    )
}