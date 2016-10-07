class ChangeYearDataType < ActiveRecord::Migration
  def change
    change_column :years, :year,  :string
  end
end
