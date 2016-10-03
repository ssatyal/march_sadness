class LookslikesController < ApplicationController
  def index
    @lookslikes = Lookslike.all
  end

  def show
    @year = Year.find(params[:year_id])
    @lookslike = @year.lookslikes.find(params[:id])
  end
end
