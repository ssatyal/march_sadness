class Lookslike < ActiveRecord::Base
  belongs_to :year

  def next
    Lookslike.where("id > ?", id).first
  end

  def prev
    Lookslike.where("id < ?", id).last
  end
end
