class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    has_many :posts

    has_secure_password
    has_secure_password :recovery_password, validations: false

    validates :username, presence: true, uniqueness: true, length: {minimum: 3}
    validates :password, presence: true
end
