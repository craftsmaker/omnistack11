const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', ()=>{
	beforeEach(async ()=>{
		await connection.rollback()
		await connection.migrate.latest()
	})

	afterAll(async ()=>{
		await connection.destroy()
	})

	it('Should be able to create a new ONG', async ()=>{
		const response = await request(app)
			.post('/ongs')
			.send({
				name: 'APAD',
				email: 'contato@hotmail.com',
				whatsapp: '00000000000',
				city: 'Rio',
				uf: 'SC'
			})
		expect(response.body).toHaveProperty('id')
	})
})