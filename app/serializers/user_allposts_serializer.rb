class UserAllpostsSerializer < ActiveModel::Serializer
  attributes :id, :username, :password

  has_many :posts
  has_many :comments
end
