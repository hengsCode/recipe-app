import { React, useState } from "react";
import "./styles.css";
import RecipeCard from "../../RecipeCard";
import RecipeView from "../RecipeView";
import RecipeFilter from "../RecipeFilter";
import RecipeSorter from "../RecipeSorter";
import { YoutubeSearchedFor } from "@material-ui/icons";

const RecipeListView = (props) => {
  const { recipeList, category } = props;
  const [modal, setModal] = useState(false);
  const [recipe, setRecipe] = useState("");

  const handleClick = (recipe) => {
    const body = document.body;
    body.style.overflow = "hidden";
    setModal(true);
    setRecipe(recipe);
  };

  const handleClose = () => {
    setModal(!modal);
  };

  const handleSortClick = (e) => {};

  return (
    <>
      <div className="recipe-list-view-inner-content">
        <div className="recipe-list-view-filter-container">
          <RecipeFilter />
        </div>
        <div className="recipe-list-view-container">
          <div className="recipe-list-view-header">
            <div className="recipe-list-view-label">Results: {category}</div>
            <RecipeSorter handleSortClick={handleSortClick} />
          </div>
          {recipeList.length > 0 ? (
            <div className="recipe-list-view-content">
              {recipeList.map((recipe, _) => {
                return (
                  <>
                    <div
                      className="recipe-list-view-item"
                      onClick={() => {
                        handleClick(recipe);
                      }}
                    >
                      <RecipeCard recipe={recipe} />
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            <div className="recipe-list-view-none">
              <YoutubeSearchedFor class="recipe-list-none-icon" />
              Oops, we can't seem to find what you're looking for...
            </div>
          )}
        </div>
      </div>
      {modal && <RecipeView recipe={recipe} handleClose={handleClose} />}
    </>
  );
};

export default RecipeListView;
