class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :post_body, :upvote, :user_id , :comments

 
  has_many :comments
  belongs_to :user
end
