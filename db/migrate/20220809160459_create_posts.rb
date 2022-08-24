class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :post_body
      t.integer :upvote
      t.integer :user_id

      t.timestamps
    end
  end
end
