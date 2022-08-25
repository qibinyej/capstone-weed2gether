class Post < ApplicationRecord
    has_many :comments
    # has_many :users, through: :comments
    
   belongs_to :user

    validates :title, presence: true
    
    
end
