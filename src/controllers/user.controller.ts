import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export class UserController {

/* ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-  Get All Users  -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~ */
	async getAllUsers (res: Response) {
		const users = await prisma.user.findMany()

		res.status(200).json(users)
	}

/* ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-  Get User by ID  -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~ */
	async getUserById (req: Request, res: Response) {
		const uuid = req.params.uuid,
			user = await prisma.user.findUnique({
				where: {
					uuid: uuid
				}
			})

		res.json(user)
	}

/* ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-  Update User  -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~ */
	async updateUser (req: Request, res: Response) {
		const { firstName, lastName, email, password, isAdmin } = req.body,
			uuid = req.params.uuid,
			user = await prisma.user.update({
				where: {
					uuid: uuid
				},
				data: {
					firstName: firstName,
					lastName: lastName,
					email: email,
					password: password,
					isAdmin: isAdmin || false
				}
			})

		if (!user) {
			res.status(400).json('Bad input have been supplied.')
		}

		res.status(200).json(user)
	}
/* ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-  Delete User  -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~ */
	async deleteUser (req: Request, res: Response) {
		const uuid = req.params.uuid
		prisma.user.delete({
			where: { 
				uuid: uuid
			}
		})

		res.status(201).json('User deleted accordingly to your wishes.')
	}
}

export default new UserController()