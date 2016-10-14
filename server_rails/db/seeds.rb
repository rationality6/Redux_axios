# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

REACTS_TO_CREATE = 15

REACTS_TO_CREATE.times do
    React.create name:      Faker::Name.name ,
                 phone:     Faker::PhoneNumber.cell_phone
end

puts Cowsay.say "Created #{REACTS_TO_CREATE} reacts"
