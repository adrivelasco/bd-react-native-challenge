import request from '../helpers/request';

const api = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass';

export function fetchDrinksList() {
  return request(api);
}
