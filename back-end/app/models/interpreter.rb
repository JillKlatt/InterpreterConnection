class Interpreter < ApplicationRecord
  belongs_to :city
  belongs_to :language
  validates :name, presence: true
end
