# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'cleaning up database'
Cocktail.destroy_all
Ingredient.destroy_all
puts 'database is clean'
puts 'creating Ingredients'
Ingredient.create(name: "Lemon")
Ingredient.create(name: "Ice")
Ingredient.create(name: "Rum")
Ingredient.create(name: "Lime juice")
Ingredient.create(name: "Syrup")
Ingredient.create(name: "Gin")
Ingredient.create(name: "Tonic")
Ingredient.create(name: "Cognac")
Ingredient.create(name: "Coca Cola")
Ingredient.create(name: "Aperol")
Ingredient.create(name: "Spritz")
Ingredient.create(name: "Prosecco")
puts 'creating Cocktails'
Cocktail.create(name: "Aperol Spritz")
Cocktail.create(name: "Mojito")
Cocktail.create(name: "Rom Coke")
puts 'done'
