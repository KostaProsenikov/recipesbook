import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('cake', 'A very tasty cake',
    'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273545_8.jpg?itok=qM3FgbWW'),
    new Recipe('new pastry', 'A very pastry cake',
    'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273545_8.jpg?itok=qM3FgbWW')
    ];

  constructor() { }

  ngOnInit() {
  }

}
