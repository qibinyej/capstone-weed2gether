# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding!"
User.destroy_all
Post.destroy_all
UserPost.destroy_all
Comment.destroy_all

puts "creating users"
u1 = User.create!(username: "admin1", password: "adminuser1")
u2 = User.create!(username: "admin2", password: "adminuser2")

puts "creating posts"
p1 = Post.create!(title: "question!", post_body: "I got qestions!", upvote: 10)
p2 = Post.create!(title: "answer", post_body: "I got answers!", upvote: 19)

puts "creating user_posts"
UserPost.create!(user_id: u1, post_id: p1)
UserPost.create!(user_id: u2, post_id: p2)

puts "creating comments"
c1 = Comment.create!(comment:"Good!", post_id: p1.id, user_id: u1.id)
c2 = Comment.create!(comment:"Great questions!", post_id: p1.id, user_id: u2.id)
c3 = Comment.create!(comment:"Nice!", post_id: p2.id, user_id: u2.id)

puts "Done seeding!"
