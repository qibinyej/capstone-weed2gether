class Post < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    
    has_many :user_posts
    has_many :users, through: :user_posts

    validates :title, presence: true, length: {maximum: 30}
    validates :post_body, length: {maximum: 500}
    
end
