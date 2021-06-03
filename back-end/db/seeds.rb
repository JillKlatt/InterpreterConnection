# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Language.create(name: "Alienese")
Language.create(name: "American Sign Language")
Language.create(name: "Arabic")
Language.create(name: "Dothraki")
Language.create(name: "English")
Language.create(name: "French")
Language.create(name: "German")
Language.create(name: "Hindi")
Language.create(name: "Japanese")
Language.create(name: "Klingon")
Language.create(name: "Mandarin")
Language.create(name: "Portuguese")
Language.create(name: "Russian")
Language.create(name: "Spanish")
# Total Languages: 14





City.create(name: "Chicago")
City.create(name: "Cleveland")
City.create(name: "Columbus")
City.create(name: "Denver")
City.create(name: "Dictionopolis")
City.create(name: "Houston")
City.create(name: "Kansas City")
City.create(name: "Las Vegas")
City.create(name: "Los Angeles")
City.create(name: "New York")
City.create(name: "Phandelver")
City.create(name: "Phoenix")
City.create(name: "San Antonio")
City.create(name: "San Diego")
City.create(name: "Westeros")
# Total cities: 16




Interpreter.create({
    name: "Jill Klatt", 
    email: "jill@gmail.com", 
    phone: "123-456-7891", 
    notes: "Nice Gal", 
    city_id: 2, 
    language_id: 2
})
5.times do
    Interpreter.create({
        "name" => Faker::Name.name, 
        "email" => Faker::Internet.email, 
        "phone" => Faker::PhoneNumber.cell_phone, 
        "notes" => Faker::Demographic.educational_attainment, 
        "city_id" => Faker::Number.between(from: 1, to: 16), 
        "language_id" => Faker::Number.between(from: 1, to: 14)
    })

end
