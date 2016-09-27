class LookslikesController < ApplicationController
  def index
    @lookslikes = Lookslike.all
  end

  def show
    @lookslike = Lookslike.find(params[:id])
  end
end
