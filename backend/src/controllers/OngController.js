const connection = require('../database/connection')
const crypto = require('crypto')
const generateUniqueId = require('../utils/generateUniqueId.js')

module.exports = {
	async index(request,response){
		const ongs = await connection('ongs').select('*')
		return response.json(ongs)
	},
	
	async create(request,response){
		const {name,email,whatsapp,city,uf} = request.body
		const id = generateUniqueId()

		try{
			await connection('ongs').insert({
				id,
				name,
				email,
				whatsapp,
				city,
				uf
			})

		} 
		catch(e){
			console.log(e)
		}

		return response.json({id})
	}
}