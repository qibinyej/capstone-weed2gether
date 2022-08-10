class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    has_many :user_posts
    has_many :posts, through: :user_posts

    has_secure_password
    has_secure_password :recovery_password, validations: false

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
end
