class City < ApplicationRecord
    has_many :interpreters
    has_many :languages, through: :interpreters
end
