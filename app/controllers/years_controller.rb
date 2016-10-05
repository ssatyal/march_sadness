class YearsController < ApplicationController
  def index
    @years = Year.all
  end

  def show
    @years = Year.all
    @year = Year.find(params[:id])
    @lookslikes = @year.lookslikes
  end
end
