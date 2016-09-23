class Lookslike < ActiveRecord::Base
  belongs_to :year
  # def self.next(lookslikes)
  #   where('id < ?', lookslikes.id).last
  # end
  #
  # def self.previous(lookslikes)
  #   where('id > ?', lookslikes.id).first
  # end
end
