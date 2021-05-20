class Language < ApplicationRecord
    has_many :interpreters
    has_many :cities, through: :interpreters
end
