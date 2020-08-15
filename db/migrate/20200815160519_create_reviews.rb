class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.text :content
      t.references :cocktail, null: false, foreign_key: true
      t.integer :rating, null: false

      t.timestamps
    end
  end
end
