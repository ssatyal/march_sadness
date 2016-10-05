class LookslikesController < ApplicationController
  def index
    @lookslikes = Lookslike.all
  end

  def show
    @years = Year.all
    @year = Year.find(params[:year_id])
    @lookslike = @year.lookslikes.find(params[:id])
  end
end
