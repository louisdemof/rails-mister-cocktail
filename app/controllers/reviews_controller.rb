class ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    # we need `review_id` to associate review with corresponding cocktail
    @cocktail = Cocktail.find(params[:cocktail_id])
    @review.cocktail = @cocktail
    @review.save
    redirect_to cocktail_path(@cocktail)
  end

  def new
    @review = Review.new
    @cocktail = Cocktail.find(params[:cocktail_id])
  end

  private

  def review_params
    params.require(:review).permit(:content, :rating)
  end
end
