# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Language.create(name: "English")
Language.create(name: "French")
Language.create(name: "Spanish")

City.create(name: "Cleveland")
City.create(name: "Chicago")
City.create(name: "New York")

Interpreter.create(name: "Jill", email: "jill@gmail.com", phone: "123-456-7891", notes: "Nice Gal", city_id: 1, language_id: 1)
Interpreter.create(name: "Maggie", email: "maggie@gmail.com", phone: "123-456-7891", notes: "Old Lady", city_id: 2, language_id: 3)
Interpreter.create(name: "Thunder", email: "thunder@gmail.com", phone: "123-456-7891", notes: "Grumpy Man", city_id: 3, language_id: 2)