class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    has_many :user_posts
    has_many :posts, through: :user_posts
end
