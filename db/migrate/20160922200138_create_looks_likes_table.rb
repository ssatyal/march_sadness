class CreateLooksLikesTable < ActiveRecord::Migration
  def change
    create_table :lookslikes do |t|
      t.string :name
      t.string :looks_like
      t.string :photo_url
      t.belongs_to :year
    end
  end
end
