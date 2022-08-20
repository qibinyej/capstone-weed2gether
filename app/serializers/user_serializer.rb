class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :posts
  
  has_many :posts
end
