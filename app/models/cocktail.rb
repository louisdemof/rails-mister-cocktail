class Cocktail < ApplicationRecord
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses
  has_one_attached :photo
  has_many :reviews, dependent: :destroy

  validates :name, presence: true
  validates :name, uniqueness: true
end
