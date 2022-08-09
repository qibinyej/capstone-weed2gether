class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :post_body, :upvote

  has_many :comments
end
