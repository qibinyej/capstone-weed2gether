class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  has_many :posts, through: :user_posts
end
