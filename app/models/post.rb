class Post < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    has_many :user_posts
    has_many :users, through: :user_posts
    
end
