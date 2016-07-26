require 'faker'

dad = Contact.create!(name: "Steve Lang", email: "sflang@gmail.com")
mom = Contact.create!(name: "Helena Lang", email: "hbarlang@gmail.com")

10.times do 
  name = Faker::Name.name
  email = Faker::Internet.email
  Contact.create!(name: name, email: email)
end
