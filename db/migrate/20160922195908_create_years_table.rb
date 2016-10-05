class CreateYearsTable < ActiveRecord::Migration
  def change
    create_table :years do |t|
      t.integer :year
    end
  end
end
