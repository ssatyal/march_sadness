class YearsController < ApplicationController
  def index
    @years = Year.all
  end

  def show
    @year = Year.find(params[:id])
  end
end
