import { Application } from 'express'
import { RoutesConfig } from './routesConfig'
import RecipeController from '../controllers/recipe.controller'
/* blabla */

export class RecipeRoutes extends RoutesConfig {
	constructor(app: Application) {
		super(app, 'RecipeRoutes')
	}

    configureRoutes() {
        this.app.route('/recipe').get(RecipeController.getOneRecipe)
        this.app.route('/recipe/category/:id').get(RecipeController.getRecipesByCategory)
        this.app.route('/recipe').get(RecipeController.getAllRecipes)

        this.app.route('/recipe').post(RecipeController.createRecipe)

        this.app.route('/recipe/:uuid').put(RecipeController.updateRecipe)

        this.app.route('/recipe/:uuid').delete(RecipeController.deleteRecipe)

        return this.app
    }
}