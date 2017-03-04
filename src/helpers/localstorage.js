function getLocalStorage() {
  return JSON.parse(localStorage.getItem('recipes')).recipeCards;
}

export default getLocalStorage ;
