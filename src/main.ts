import express, { Application } from 'express'
import userRouter from './routes/user'

// Boot express
const app: Application = express()
const port = 3000

app.use(express.json())
app.use(userRouter)


// app.post('/create_recipe', async (req: Request, res: Response) => {
// 	const { name, steps, vegan, porkFree, glutenFree, ingredients } = req.body,
// 		recipe = await prisma.recipe.create({ 
// 			data: {
// 				name: name,
// 				steps: steps,
// 				vegan: vegan,
// 				porkFree: porkFree,
// 				glutenFree: glutenFree,
// 				ingredients: {
// 					create: String[{'ale': 'zdqf'}]
// 				}
// 			}
// 		})
	
// 	res.json(recipe)
// })

// app.post('/', async (req: Request, res: Response) => {
// 	const { firstName, lastName, email, password } = req.body,
// 		user = await prisma.user.create({
// 			data: {
// 				firstName: firstName,
// 				lastName: lastName,
// 				email: email,
// 				password: password
// 			}
// 		})

// 	res.json(user)
// })

// app.get('/', async (req: Request, res: Response) => {
// 	const users = await prisma.user.findMany()

// 	res.json(users)
// })

// app.put('/', async (req: Request, res: Response) => {
// 	const { uuid, username } = req.body,
// 		updatedUser = await prisma.user.update({
// 			where: {
// 				uuid: uuid
// 			},
// 			data: {
// 				username: username
// 			}
// 		})
	
// 	res.json(updatedUser)
// })

// app.delete('/:id', async (req: Request, res: Response) => {
// 	const uuid = req.params.uuid,
// 		deletedUser = await prisma.user.delete({
// 			where: {
// 				uuid: uuid
// 			}
// 		})

// 	res.json(deletedUser)
// })

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))