class Review < ApplicationRecord
  belongs_to :cocktail
  validates :content, :presence => {:message => 'cannot be blank'}
  validates :rating, :inclusion => { :in => 0..5, :message => 'The rating should be between 0 and 5' }
  validates :rating, :presence => {:message => 'cannot be blank'}
  validates :rating, :presence => { :message => 'should be a number'}
end
