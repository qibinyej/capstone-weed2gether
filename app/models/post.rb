class Post < ApplicationRecord
    has_many :comments
    # has_many :users, through: :comments
    
   belongs_to :user

    validates :title, presence: true, length: {maximum: 30}
    validates :post_body, length: {maximum: 500}
    
end
